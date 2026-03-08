// app/api/preview/route.js
import { NextResponse } from "next/server";

/**
 * Cache simple en memoria (por instancia). TTL configurable.
 * Nota: en serverless esto vive por instancia; para producción usar Redis/Edge KV si quieres persistencia global.
 */
const CACHE = new Map(); // url -> { ts, data }
const TTL = 60 * 60; // segundos (1 hora)

async function fetchHTML(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; PreviewBot/1.0; +https://tusitio.com)",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) throw new Error("Fetch failed");
  return await res.text();
}

function extractMeta(html) {
  const meta = {};
  const ogImage = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
  const twImage = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i);
  const ogTitle = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
  const titleTag = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const ogDesc = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
  const twDesc = html.match(/<meta[^>]*name=["']twitter:description["'][^>]*content=["']([^"']+)["']/i);
  const descTag = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);

  meta.image = (ogImage && ogImage[1]) || (twImage && twImage[1]) || null;
  meta.title = (ogTitle && ogTitle[1]) || (titleTag && titleTag[1]) || null;
  meta.description = (ogDesc && ogDesc[1]) || (twDesc && twDesc[1]) || (descTag && descTag[1]) || null;

  return meta;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

    // revisar cache
    const now = Math.floor(Date.now() / 1000);
    if (CACHE.has(url)) {
      const entry = CACHE.get(url);
      if (now - entry.ts < TTL) {
        return NextResponse.json(entry.data, {
          headers: { "Cache-Control": `public, max-age=${TTL}` },
        });
      } else {
        CACHE.delete(url);
      }
    }

    // Si es TikTok intentar oEmbed primero (rápido y estable para thumbnail)
    if (/tiktok\.com/i.test(url)) {
      try {
        const o = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`);
        if (o.ok) {
          const json = await o.json();
          const out = {
            image: json.thumbnail_url || null,
            title: json.title || null,
            description: json.author_name ? `Video de ${json.author_name}` : null,
            provider: "tiktok-oembed",
          };
          CACHE.set(url, { ts: now, data: out });
          return NextResponse.json(out, {
            headers: { "Cache-Control": `public, max-age=${TTL}` },
          });
        }
      } catch (e) {
        // seguir al scraping si falla
      }
    }

    // Fallback: scrape la página y extraer og/twitter
    const html = await fetchHTML(url);
    const meta = extractMeta(html);
    const out = {
      image: meta.image,
      title: meta.title,
      description: meta.description,
      provider: "og-scrape",
    };

    CACHE.set(url, { ts: now, data: out });

    return NextResponse.json(out, {
      headers: { "Cache-Control": `public, max-age=${TTL}` },
    });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
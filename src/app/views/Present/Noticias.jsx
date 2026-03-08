"use client";

import React, { useEffect, useState } from "react";

/* TikTok embed modal (igual que antes) */
const TikTokEmbed = ({ videoUrl }) => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [videoUrl]);

  return (
    <blockquote className="tiktok-embed" cite={videoUrl} data-video-url={videoUrl} style={{ width: "100%" }}>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">Ver en TikTok</a>
    </blockquote>
  );
};

const VideoModal = ({ videoUrl, onClose }) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-md overflow-hidden shadow-2xl z-10">
        <button onClick={onClose} aria-label="Cerrar" className="absolute right-3 top-3 z-20 bg-white/80 rounded-full p-1 hover:bg-white">✕</button>
        <div className="p-4">
          <TikTokEmbed videoUrl={videoUrl} />
        </div>
      </div>
    </div>
  );
};

async function fetchPreview(url) {
  try {
    const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

const Noticias = () => {
  // 1) TikToks de medios (primero)
  const newsTikToks = [
    "https://www.tiktok.com/@redunotv/video/7599834182897896720?_r=1&_t=ZS-942W4E7255h",
    "https://www.tiktok.com/@luischichisiles26/video/7603796335560543495?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7597874919396986124?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7605295101891316999?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7598565551773961528?_r=1&_t=ZS-942W8JeoJ9B",
  ];

  const externalArticles = [
    "https://erbol.com.bo/el-%C3%A1nfora-1/exemenerrista-luis-eduardo-siles-se-inscribe-para-la-alcald%C3%ADa-de-la-paz-en-alianza-con",
    "https://www.atb.com.bo/2026/01/20/luis-eduardo-chichi-siles-presenta-sus-propuestas-para-la-alcaldia-de-la-paz/",
    "https://www.reduno.com.bo/noticias/luis-eduardo-chichi-siles-candidato-a-la-alcaldia-de-la-paz-promete-acabar-con-la-corrupcion-20262523501",
  ];

  const ownVideos = [
    "https://www.tiktok.com/@luischichisiles26/video/7605001323662019848?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7602406496978078983?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7597933800613563659?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7599800925036825863?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7594741634722549010?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7594896356326542610?_r=1&_t=ZS-942W8JeoJ9B",
    "https://www.tiktok.com/@luischichisiles26/video/7594738091164781831?_r=1&_t=ZS-942W8JeoJ9B",
  ];

  const [previews, setPreviews] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);

  // Priorizar TikToks de medios -> fetch primero
  useEffect(() => {
    let mounted = true;

    const loadPreviews = async () => {
      // 1) TikToks de medios (prioridad)
      await Promise.all(
        newsTikToks.map(async (u) => {
          if (previews[u]) return;
          const p = await fetchPreview(u);
          if (p && mounted) {
            // precache image en background
            if (p.image) {
              const img = new Image();
              img.src = p.image;
            }
            setPreviews((prev) => ({ ...prev, [u]: p }));
          }
        })
      );

      // 2) Artículos (siguiente)
      await Promise.all(
        externalArticles.map(async (u) => {
          if (previews[u]) return;
          const p = await fetchPreview(u);
          if (p && mounted) {
            if (p.image) {
              const img = new Image();
              img.src = p.image;
            }
            setPreviews((prev) => ({ ...prev, [u]: p }));
          }
        })
      );

      // 3) Videos propios (último)
      await Promise.all(
        ownVideos.map(async (u) => {
          if (previews[u]) return;
          const p = await fetchPreview(u);
          if (p && mounted) {
            if (p.image) {
              const img = new Image();
              img.src = p.image;
            }
            setPreviews((prev) => ({ ...prev, [u]: p }));
          }
        })
      );
    };

    loadPreviews();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // clase reutilizable para cards con sombra uniforme y hover scale
  const cardClass =
    "bg-white rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]";

  return (
    <section className="w-full bg-[#fdfbfb] py-24 px-6" id="news">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#800000] text-sm font-bold tracking-[0.4em] uppercase">En Campaña con Chichi Siles</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#800000] uppercase italic">Últimas Noticias</h3>
          </div>
        </div>

        {/* 1) Noticias (TikToks de medios) - tarjetas más altas */}
        <div className="mb-12">
          <h4 className="text-xl md:text-2xl font-black text-[#800000] uppercase mb-6">Noticias (medios)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsTikToks.map((url) => {
              const p = previews[url];
              return (
                <article key={url} className={cardClass}>
                  {p?.image ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                      <img src={p.image} alt={p.title || "Noticia"} className="w-full h-64 sm:h-72 md:h-80 object-contain" />
                    </a>
                  ) : (
                    <div className="w-full h-64 sm:h-72 md:h-80 bg-gray-100 flex items-center justify-center text-sm text-gray-500">Cargando preview…</div>
                  )}

                  <div className="p-4">
                    <div className="text-[10px] font-black text-[#B8860B] uppercase">Medio</div>
                    <h5 className="font-black text-[#800000] mt-2 text-sm line-clamp-2">{p?.title || "Video - TikTok"}</h5>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p?.description || ""}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <button onClick={() => setActiveVideo(url)} className="bg-[#800000] text-white px-3 py-1 rounded-sm text-sm hover:scale-105 transition-transform">Ver</button>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#800000]">Abrir TikTok</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 2) Artículos externos (prensa) - como antes */}
        <div className="mb-12">
          <h4 className="text-xl md:text-2xl font-black text-[#800000] uppercase mb-6">Artículos — Prensa</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {externalArticles.map((url) => {
              const p = previews[url];
              return (
                <article key={url} className={cardClass}>
                  {p?.image ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                      <img src={p.image} alt={p.title || "Artículo"} className="w-full h-44 object-cover" />
                    </a>
                  ) : (
                    <div className="w-full h-44 bg-gray-100 flex items-center justify-center text-sm text-gray-500">Cargando imagen…</div>
                  )}

                  <div className="p-4">
                    <span className="text-[10px] font-black text-[#B8860B] uppercase">Prensa</span>
                    <h5 className="font-black text-[#800000] mt-2 text-sm line-clamp-2">{p?.title || "Artículo externo"}</h5>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p?.description || ""}</p>

                    <div className="mt-3">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#800000]">Leer artículo</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 3) Videos propios (oficiales) */}
        <div className="mb-6">
          <h4 className="text-xl md:text-2xl font-black text-[#800000] uppercase mb-6">Videos oficiales</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ownVideos.map((url) => {
              const p = previews[url];
              return (
                <article key={url} className={cardClass}>
                  {p?.image ? (
                    <div className="relative">
                      <img src={p.image} alt={p.title || "Noticia"} className="w-full cursor-pointer h-64 sm:h-72 md:h-80 object-contain" />
                      <button onClick={() => setActiveVideo(url)} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-3 hover:scale-105 transition-transform" aria-label="Reproducir video">▶</button>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-sm text-gray-500">Cargando preview…</div>
                  )}

                  <div className="p-4">
                    <h5 className="font-black text-[#800000] text-sm line-clamp-2">{p?.title || "Video TikTok"}</h5>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">{p?.description || ""}</p>
                    <div className="mt-3">
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[#800000]">Ver en TikTok</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>

      {activeVideo && <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  );
};

export default Noticias;
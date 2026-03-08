import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Chichi Siles alcalde",

  description:
    "Luis Eduardo 'Chichi' Siles candidato a ALCALDE de LA PAZ por UPC. Propuesta basada en orden, transparencia y liderazgo para transformar la Alcaldía de La Paz con gestión responsable.",

  keywords: [
    "Luis Eduardo Siles",
    "Chichi Siles",
    "ALCALDE LA PAZ",
    "Luis Eduardo Siles ALCALDE",
    "Chichi Siles ALCALDE LA PAZ",
    "UPC LA PAZ",
    "Candidato ALCALDE LA PAZ UPC",
    "Elecciones ALCALDE LA PAZ",
    "Propuesta ALCALDÍA LA PAZ",
    "Orden y transparencia LA PAZ",
    "Alcaldia La Paz",
    "UPC",
    "Elecciones La Paz Alcaldia",
  ],

  authors: [{ name: "Equipo de Campaña Luis Eduardo Siles - UPC" }],

  openGraph: {
    title:
      "Luis Eduardo 'Chichi' Siles | ALCALDE de LA PAZ por UPC",
    description:
      "Candidato a ALCALDE de LA PAZ por UPC. Orden, transparencia y liderazgo para una nueva gestión municipal.",
    url: "https://chichisiles.com",
    siteName: "Chichi Siles ALCALDE LA PAZ",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/assets/LuisEduardoHero.webp",
        width: 1200,
        height: 630,
        alt: "Luis Eduardo 'Chichi' Siles - ALCALDE de LA PAZ por UPC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Luis Eduardo 'Chichi' Siles | ALCALDE LA PAZ - UPC",
    description:
      "Propuesta para la ALCALDÍA DE LA PAZ por UPC. Orden y transparencia.",
    images: ["/assets/LuisEduardoHero.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const SITE_URL = "https://chichisiles.com";

  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#800000" />
        <link rel="canonical" href={SITE_URL} />
      </head>

      <body className={`${publicSans.variable} antialiased`}>
        {children}

        {/* JSON-LD optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luis Eduardo Siles",
              alternateName: "Chichi Siles",
              jobTitle: "Candidato a Alcalde de La Paz",
              affiliation: {
                "@type": "Organization",
                name: "UPC",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Paz",
                addressCountry: "BO",
              },
              image: `${SITE_URL}/assets/LuisEduardoHero.webp`,
              url: SITE_URL,
            }),
          }}
        />
      </body>
    </html>
  );
}

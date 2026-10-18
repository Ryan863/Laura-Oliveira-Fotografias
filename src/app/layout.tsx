import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lauraoliveirafotografia.com.br"),
  title: "Laura Oliveira | Fotografia e Videografia Editorial em Herval d'Oeste e Joaçaba - SC",
  description:
    "Registrando emoções e criando memórias que duram para sempre. Ensaios de gestante, casamento civil, infantil, família, feminino autoral e celebrações em Herval d'Oeste e região.",
  keywords: [
    "fotografia herval d oeste",
    "fotografa joaçaba",
    "laura oliveira fotografia",
    "ensaio gestante herval d oeste",
    "casamento civil joaçaba",
    "ensaio familia sc",
    "ensaio feminino sc",
    "videografia herval d oeste"
  ],
  authors: [{ name: "Laura Oliveira" }],
  openGraph: {
    title: "Laura Oliveira Fotografias | Portfólio Editorial",
    description: "Registrando emoções e criando memórias que duram para sempre. Herval d'Oeste e Joaçaba - SC.",
    url: "https://lauraoliveirafotografia.com.br",
    siteName: "Laura Oliveira Fotografias",
    images: [
      {
        url: "/assets/laura/hero-laura.jpg",
        width: 1200,
        height: 630,
        alt: "Laura Oliveira - Fotógrafa e Videógrafa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Laura Oliveira Fotografias",
    "image": "https://lauraoliveirafotografia.com.br/assets/laura/hero-laura.jpg",
    "description": "Registrando emoções e criando memórias que duram para sempre. Gestante, Casamento Civil, Infantil, Família, Aniversários e Feminino.",
    "telephone": "+554999363370",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Santos Dumont, 2147 - Nossa Sra. Aparecida",
      "addressLocality": "Herval d'Oeste",
      "addressRegion": "SC",
      "postalCode": "89610-000",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": "17:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday"],
        "opens": "20:30",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "17:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "R$ 350 - R$ 800"
  };

  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-[#080809] text-[#FAFAF9] antialiased selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}

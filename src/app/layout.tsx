import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://estate.klyx.fr"),
  title: "Klyx Estate · Le studio média des mandats de prestige",
  description:
    "Films cinématiques créés à partir de vos photos, photos enrichies, page dédiée au bien et déclinaisons pour vos réseaux. De quoi rentrer le mandat et le lancer en 48 heures. Bordeaux, Bassin d'Arcachon, Côte Atlantique.",
  keywords: [
    "vidéo immobilière",
    "film immobilier",
    "mise en valeur mandat",
    "immobilier de prestige",
    "vidéo annonce immobilière",
    "mandat exclusif",
    "photo immobilière",
    "Bassin d'Arcachon",
    "Cap Ferret",
    "Bordeaux",
  ],
  alternates: {
    canonical: "https://estate.klyx.fr",
  },
  openGraph: {
    type: "website",
    url: "https://estate.klyx.fr",
    siteName: "Klyx Estate",
    title: "Klyx Estate · Le studio média des mandats de prestige",
    description:
      "Vos photos deviennent un film. De quoi rentrer le mandat, puis le lancer, en 48 heures.",
    locale: "fr_FR",
    images: [
      {
        url: "/media/og.jpg",
        width: 1200,
        height: 630,
        alt: "Villa de démonstration Klyx Estate, film cinématique généré à partir de douze photos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyx Estate · Le studio média des mandats de prestige",
    description:
      "Vos photos deviennent un film. Livré en 48 heures.",
    images: ["/media/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Klyx Estate",
  description:
    "Studio média pour mandats immobiliers de prestige. Films cinématiques créés à partir de photos, photos enrichies, page dédiée au bien, déclinaisons sociales. Livraison en 48 heures.",
  url: "https://estate.klyx.fr",
  image: "https://estate.klyx.fr/media/og.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bordeaux",
    addressCountry: "FR",
  },
  areaServed: ["Nouvelle-Aquitaine", "France"],
  parentOrganization: {
    "@type": "Organization",
    name: "Klyx",
    url: "https://klyx.fr",
  },
  founder: {
    "@type": "Person",
    name: "Maxime Mansiet",
  },
  knowsLanguage: "fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${hanken.variable} ${splineMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}

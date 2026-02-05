import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERTF Habitat - Spécialiste Isolation Thermique Bordeaux Gironde | ITE & ITI",
  description: "ERTF Habitat, spécialiste de l'isolation thermique intérieure et extérieure en Gironde : ITE, ITI, ravalement de façade, enduit. Intervention rapide région Bordelaise.",
  keywords: "isolation thermique Bordeaux, ITE Gironde, isolation extérieure Bordeaux, isolation intérieure Gironde, ravalement façade Bordeaux, ERTF Habitat, isolation 33, entrepreneur isolation Bordeaux",
  authors: [{ name: "ERTF Habitat" }],
  creator: "ERTF Habitat",
  publisher: "ERTF Habitat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ertfhabitat.fr"),
  alternates: {
    canonical: "https://ertfhabitat.fr",
  },
  openGraph: {
    title: "ERTF Habitat - Spécialiste Isolation Thermique Bordeaux",
    description: "ERTF Habitat, spécialiste de l'isolation thermique intérieure et extérieure : ITE, ITI, ravalement de façade, enduit en Gironde et région Bordelaise.",
    url: "https://ertfhabitat.fr",
    siteName: "ERTF Habitat - Spécialiste Isolation Thermique",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ERTF Habitat - Spécialiste Isolation Thermique Bordeaux",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERTF Habitat - Spécialiste Isolation Thermique",
    description: "Spécialiste de l'isolation thermique intérieure et extérieure : ITE, ITI, ravalement de façade, enduit en Gironde et région Bordelaise.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) - Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17681257962" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17681257962');
          `}
        </Script>

        {/* Google tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4JQP3BJE5G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4JQP3BJE5G');
          `}
        </Script>

      </head>
      <body className="antialiased prevent-horizontal-scroll" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

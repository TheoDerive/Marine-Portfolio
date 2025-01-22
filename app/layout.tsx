import { Metadata } from "next";

import "../style/style.scss";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Loading from "@/components/Loading";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Marine Sicaud | Portfolio",
  description: "Venez voir mon portfolio et les projets que j'ai réalisés.",
  icons: {
    icon: "/images/logo.svg",
  },
  openGraph: {
    title: "Marine Sicaud | Portfolio",
    description: "Découvrez mon portfolio et mes projets.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Marine Sicaud Logo",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <title>Marine Sicaud | Portfolio</title>
        <meta name="description" content="Description de votre site ou de votre page." />
        <meta name="keywords" content="Marine Sicaud, bientôt disponible, site web" />
        <meta name="author" content="Marine Sicaud" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Marine Sicaud" />
        <meta property="og:description" content="Bientôt Disponible - Découvrez bientôt le site officiel de Marine Sicaud." />
        <meta property="og:url" content="https://www.marine-sicaud.fr" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/your/image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marine Sicaud" />
        <meta name="twitter:description" content="Bientôt Disponible - Découvrez bientôt le site officiel de Marine Sicaud." />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <PageLayout>{children}</PageLayout>
    </html>
  );
}

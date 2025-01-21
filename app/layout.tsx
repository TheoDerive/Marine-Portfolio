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
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0"
        />

<meta property="og:site_name" content="Marine Sicaud | Portfolio" />
    <meta property="og:url" content="https://www.marine-sicaud.fr/" />
    <meta property="og:type" content="website" />
    <meta name="title" property="og:title" content="Portfolio Marine Sicaud" />
    <meta
      name="image"
      property="og:image"
      content="https://www.marine-sicaud.fr/images/logo.svg"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1182" />
    <meta property="og:image:height" content="583" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Portfolio Marine Sicaud" />
    <meta
      name="twitter:image:src"
      content="https://www.marine-sicaud.fr/images/logo.svg"
    />
    <meta name="twitter:domain" content="https://www.marine-sicaud.fr" />

    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="shortcut icon" href="./assets/logo.svg" type="image/x-icon" />
    <link rel="stylesheet" href="./style.css" />
    <link rel="image_rel" href="https://www.marine-sicaud.fr/assets/logo.svg" />    
      </Head>

      <PageLayout>{children}</PageLayout>
    </html>
  );
}

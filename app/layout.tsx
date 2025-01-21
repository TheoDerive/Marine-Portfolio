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
      </Head>
      <PageLayout>{children}</PageLayout>
    </html>
  );
}

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="dBMjJzf95mlU8FPT_Q-ib-Nd7Q2E_aIxE2L4FjsolG8" />
      </head>
      <PageLayout>{children}</PageLayout>
    </html>
  );
}

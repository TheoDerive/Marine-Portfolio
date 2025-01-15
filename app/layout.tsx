import { Metadata } from "next";

import "../style/style.scss";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import Loading from "@/components/Loading";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Marine Sicaud | Portfolio",
  icons: {
    icon: "/images/logo.ico"
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

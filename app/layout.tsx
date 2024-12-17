import { Metadata } from "next";

import "../style/style.scss";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Marine Sicaud | Portfolio",
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
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

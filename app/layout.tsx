import { Metadata } from "next";

import "../style/style.scss";
import Navbar from "@/components/Navbar";

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
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}

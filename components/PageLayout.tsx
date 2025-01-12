"use client";

import { useAppStore } from "@/store";
import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  const { isLoading } = useAppStore();

  const body = document.body;

  React.useEffect(() => {
    if (isLoading) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [isLoading]);

  React.useEffect(() => {}, [isLoading]);
  return (
    <>
      {!isLoading ? (
        <header>
          <Navbar />
        </header>
      ) : null}

      {isLoading ? <Loading /> : null}
      {children}

      {!isLoading ? <Footer /> : null}
    </>
  );
}

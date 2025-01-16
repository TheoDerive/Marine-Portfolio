"use client";

import { useAppStore } from "@/store";
import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import useUtilities from "@/hooks/useUtilities";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  const [isDashboard, setIsDashboard] = React.useState(false);
  const bodyRef = React.useRef<HTMLBodyElement>(null);

  const { isLoading, scrollPosition } = useAppStore();
  const { windowProperties } = useUtilities();

  React.useEffect(() => {
    const body = document.body;
    if (isLoading) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [isLoading]);

  React.useEffect(() => {
    if (!bodyRef.current || !windowProperties) return;

    console.log(windowProperties.location.pathname);
    if (windowProperties.location.pathname !== "/") {
      bodyRef.current.classList.remove("animations");
    }

    if (
      windowProperties.location.pathname
        .split("/")
        .filter((el) => el === "dashboard").length > 0
    ) {
      setIsDashboard(true);
    }

    if (
      scrollPosition !== 0 &&
      bodyRef.current.classList.contains("animations")
    ) {
      bodyRef.current.classList.remove("animations");
    }
  }, [scrollPosition, bodyRef, windowProperties]);

  return (
    <body className="animations" ref={bodyRef}>
      {!isLoading ? (
        <header>
          <Navbar />
        </header>
      ) : null}

      <main>
        {isLoading ? <Loading /> : null}
        {children}
      </main>

      {!isLoading && !isDashboard ? <Footer /> : null}
    </body>
  );
}

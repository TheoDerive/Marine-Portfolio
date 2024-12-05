"use client";

import React from "react";

import { useAppStore } from "@/store";

export default function useUtilities() {
  // Use zustand to centralize the value
  // If I create a local state and I return it on this hook
  // For each call, the window create an event listener and do n time the scroll calcule
  // Here, with zustand, I call the hook just on the page component, and he send the scroll position on zustand
  // And I can use the zustand value everywhere
  const { setScrollPosition } = useAppStore();

  const [windowProperties, setWindowProperties] = React.useState<
    Window & typeof globalThis
  >();

  // Get scroll position
  React.useEffect(() => {
    const handleScrollPosition = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowProperties(window);
    }
  }, []);

  return { windowProperties };
}

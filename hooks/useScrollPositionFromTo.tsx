"use client";

import { useAppStore } from "@/store";
import React from "react";

export default function useScrollPositionFromTo(
  fromClass: string,
  toClass: string,
) {
  const { scrollPosition } = useAppStore();
  const [pourcentage, setPourcentage] = React.useState<number>(0);

  React.useEffect(() => {
    const from: HTMLElement | null = document.querySelector(fromClass);
    const to: HTMLElement | null = document.querySelector(toClass);
    if (!from || !to || typeof window === "undefined") return;

    const fromTop = from.getBoundingClientRect().top + window.scrollY;
    const toBottom = to.getBoundingClientRect().bottom + window.scrollY;

    const currentScrollPosition = scrollPosition + window.innerHeight;
    const totalDistance = toBottom - fromTop;

    if (currentScrollPosition >= fromTop && currentScrollPosition <= toBottom) {
      const result = ((currentScrollPosition - fromTop) / totalDistance) * 100;
      setPourcentage(result);
    } else if (currentScrollPosition > toBottom) {
      setPourcentage(100);
    } else {
      setPourcentage(0);
    }
  }, [scrollPosition]);

  return { pourcentage };
}

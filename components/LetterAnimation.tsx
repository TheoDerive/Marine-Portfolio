"use client";

import React from "react";
import useAnimation from "@/hooks/useAnimation";

export default function LetterAnimation({ text, delay }: { text: string, delay?: number }) {
  return <>{useAnimation().letterAnimaton(text, delay)}</>;
}

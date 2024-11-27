"use client";

import HomeHeader from "@/components/Homepage/Header";
import useUtilities from "@/hooks/useUtilities";

export default function Home() {
  useUtilities();
  return (
    <>
      <HomeHeader />
    </>
  );
}

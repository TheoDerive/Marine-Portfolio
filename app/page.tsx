"use client";

import HomeAbout from "@/components/Homepage/About";
import HomeHeader from "@/components/Homepage/Header";
import HomeProjets from "@/components/Homepage/Projets";
import useUtilities from "@/hooks/useUtilities";

export default function Home() {
  useUtilities();
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeProjets />
    </>
  );
}

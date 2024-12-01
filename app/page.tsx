"use client";

import HomeAbout from "@/components/Homepage/About";
import HomeCategories from "@/components/Homepage/Categies";
import HomeCompetences from "@/components/Homepage/Competances";
import Diplomes from "@/components/Homepage/Diplomes";
import HomeHeader from "@/components/Homepage/Header";
import HomeProjets from "@/components/Homepage/Projets";
import Reviews from "@/components/Homepage/Reviews";
import useUtilities from "@/hooks/useUtilities";

export default function Home() {
  useUtilities();
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <HomeProjets />
      <HomeCategories />
      <HomeCompetences />
      <Diplomes />
      <Reviews />
    </>
  );
}

"use client";

import HomeCategories from "@/components/Homepage/Categories";
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
      <HomeProjets />
      <HomeCategories />
      <HomeCompetences />
      <Diplomes />
      <Reviews />
    </>
  );
}

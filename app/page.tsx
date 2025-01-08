"use client";

import HomeCategories from "@/components/Homepage/Categories";
import HomeCompetences from "@/components/Homepage/Competances";
import Diplomes from "@/components/Homepage/Diplomes";
import HomeHeader from "@/components/Homepage/Header";
import HomeProjets from "@/components/Homepage/Projets";
import Reviews from "@/components/Homepage/Reviews";
import useFetch from "@/hooks/useFetch";
import useUtilities from "@/hooks/useUtilities";
import React from "react";

export default function Home() {
  useUtilities();

  React.useEffect(() => {
    async function test(){
      useFetch.DELETE("competance", "677e9c0eaa8a7ec9eba42418")
    }

    test()
  }, [])

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

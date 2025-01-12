"use client";

import HomeCategories from "@/components/Homepage/Categories";
import HomeCompetences from "@/components/Homepage/Competances";
import Diplomes from "@/components/Homepage/Diplomes";
import HomeHeader from "@/components/Homepage/Header";
import HomeProjets from "@/components/Homepage/Projets";
import Reviews from "@/components/Homepage/Reviews";
import useFetch from "@/hooks/useFetch";
import useUtilities from "@/hooks/useUtilities";
import { useAppStore } from "@/store";
import { CompetanceType } from "@/types/competanceType";
import { DiplomeType } from "@/types/diplomeType";
import { ProjetType } from "@/types/projetType";
import { ReviewType } from "@/types/reviewType";
import React from "react";

export default function Home() {
  const [projets, setProjets] = React.useState<ProjetType[]>([]);
  const [competances, setCompetances] = React.useState<CompetanceType[]>([]);
  const [reviews, setReviews] = React.useState<ReviewType[]>([]);
  const [diplomes, setDiplomes] = React.useState<DiplomeType[]>([]);

  useUtilities();

  const { setIsLoading } = useAppStore();

  React.useEffect(() => {
    async function fetchingData() {
      try {
        setIsLoading(true);

        const projetsResponse = await useFetch.GETMultiples("projet");
        setProjets(projetsResponse.data.slice(0, 3));

        const competancesResponse = await useFetch.GETMultiples("competance");
        setCompetances(competancesResponse.data);

        const reviewsResponse = await useFetch.GETMultiples("review");
        setReviews(reviewsResponse.data || []);

        const diplomeResponse = await useFetch.GETMultiples("diplome");
        console.log(diplomeResponse);
        setDiplomes(diplomeResponse.data);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchingData();
  }, []);

  return (
    <>
      <HomeHeader />
      <HomeProjets projets={projets} />
      <HomeCategories />
      <HomeCompetences competences={competances} />
      <Diplomes diplomes={diplomes} />
      <Reviews reviews={reviews} />
    </>
  );
}

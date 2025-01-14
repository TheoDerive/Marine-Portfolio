"use client";

import About from "@/components/About";
import Vision from "@/components/Vision";
import Diplomes from "@/components/Homepage/Diplomes";
import { DiplomeType } from "@/types/diplomeType";
import React from "react";
import { useAppStore } from "@/store";
import useFetch from "@/hooks/useFetch";

export default function Profil() {
  const [diplomes, setDiplomes] = React.useState<DiplomeType[]>([]);

  const { setIsLoading, isLoading } = useAppStore();

  React.useEffect(() => {
    async function fetchingData() {
      try {
        setIsLoading(true);

        const diplomeResponse = await useFetch.GETMultiples("diplome");
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
      {isLoading ? null : (
        <>
          <About />
          <Vision />
          <Diplomes diplomes={diplomes} />
        </>
      )}
    </>
  );
}

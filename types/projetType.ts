import { ComponentType } from "react";

export type ProjetType = {
  _id: number;
  name: string;
  description: string;
  competances: ComponentType[];
  client: string;
  duree: string;
  lien?: string;
  service: string;
  presImg: string;
  ctxImg: string[];
  challengeImg: string[];
  solutionImg: string[];
  resultImg: string[];
};

export type ProjetForBack = {
  name: string;
  description: string;
  competances: ComponentType[];
  client: string;
  duree: string;
  lien?: string;
  service: string;
  presImg: File | null;
  ctxImg: File[];
  challengeImg: File[];
  solutionImg: File[];
  resultImg: File[];
};

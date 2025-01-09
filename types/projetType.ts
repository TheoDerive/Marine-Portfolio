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
  ctxDesc: string;
  challengeImg: string[];
  challengeDesc: string;
  solutionImg: string[];
  solutionDesc: string;
  resultImg: string[];
  resultDesc: string;
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
  ctxDesc: string;
  challengeImg: File[];
  challengeDesc: string;
  solutionImg: File[];
  solutionDesc: string;
  resultImg: File[];
  resultDesc: string;
};

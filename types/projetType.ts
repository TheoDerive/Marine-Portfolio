import { ComponentType } from "react";

export type ProjetType = {
  id: number;
  name: string;
  image: string;
  description: string;
  competances: ComponentType[];
  entreprise: string;
  date: string;
};

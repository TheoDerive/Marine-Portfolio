export type ReviewType = {
  id: number;
  imageName: string;
  entrepriseName: string;
  stars: number;
  personne: string;
  poste: string;
  message: string;
};

export type ReviewForBack = {
  imageName: File | null;
  entrepriseName: string;
  stars: number;
  personne: string;
  poste: string;
  message: string;
};

export type ReviewType = {
  _id: string;
  image: string;
  entrepriseName: string;
  stars: number;
  personne: string;
  poste: string;
  message: string;
};

export type ReviewForBack = {
  imageName: File | null | string;
  entrepriseName: string;
  stars: number;
  personne: string;
  poste: string;
  message: string;
};

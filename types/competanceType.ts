export type CompetanceType = {
  id: number;
  name: string;
  image: string;
  type: string;
};

export type CompetanceForBack = {
  name: string;
  image: File | null;
  type: string;
};

export type CompetanceType = {
  _id: string;
  name: string;
  image: string;
  type: string;
};

export type CompetanceForBack = {
  name: string;
  image: File | null | string;
  type: string;
};

export type CompetanceType = {
  id: number;
  name: string;
  image: string;
  type: "marketing" | "design";
};

export type CompetanceForBack = {
  name: string;
  image: File | null;
  type: "marketing" | "design";
};

export type ProjetType = {
  _id: string;
  type: string;
  name: string;
  description: string;
  client: string;
  duree: string;
  lien?: string;
  service: string[];
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
  type: string;
  description: string;
  service: string;
  client: string;
  duree: string;
  lien?: string;
  presImg: File | string | null;
  ctxImg: (File | string)[];
  ctxDesc: string;
  challengeImg: (File | string)[];
  challengeDesc: string;
  solutionImg: (File | string)[];
  solutionDesc: string;
  resultImg: (File | string)[];
  resultDesc: string;
};

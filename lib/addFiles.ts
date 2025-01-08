import { ProjetForBack } from "@/types/projetType";
import { Dispatch } from "react";

export default function addFiles(
  files: FileList,
  set: Dispatch<React.SetStateAction<ProjetForBack>>,
  prevValue: ProjetForBack,
  key: string,
) {
  const resultArray = [];
  for (let i = 0; i < files.length; i++) {
    resultArray.push(files[i]);
  }
  set({
    ...prevValue,
    [key]: resultArray,
  });
}

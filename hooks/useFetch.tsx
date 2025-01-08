import toBase64 from "@/lib/base64";
import { CompetanceForBack } from "@/types/competanceType";
import { ProjetForBack } from "@/types/projetType";
import { ReviewForBack } from "@/types/reviewType";

type categorieType = "competance" | "projet" | "review";

const imgKeys: (keyof ProjetForBack)[] = [
    "presImg",
    "ctxImg",
    "resultImg",
    "solutionImg",
    "challengeImg",
  ];

const useFetch = {
  // Recuperer tous les element dans la categorie
  GETMultiples: async (categorie: categorieType) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    const response = await fetch(`/api/${categorie}/get${updatedCategorie}s`);
    const data = await response.json();

    return data;
  },

  // Recuperer que un element cibler
  GET: async (categorie: categorieType, id: string) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    const response = await fetch(
      `/api/${categorie}/get${updatedCategorie}s/${id}`,
    );
    const data = await response.json();

    return data;
  },

  // Delete element
  DELETE: async (categorie: categorieType, id: string) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    const formData = new FormData();
    formData.set("id", id);

    const response = await fetch(
      `/api/${categorie}/delete${updatedCategorie}`,
      {
        method: "DELETE",
        body: formData,
      },
    );
    const data = await response.json();

    return data;
  },

  // Update un projet
  UPDATEProjet: async ( element: ProjetForBack) => {
      const formData = new FormData();

      // Boucler dans les index des image de element
      for (const el of imgKeys) {
        const projetElement = element[el] as File | File[];

        // Si c'est un array
        if (Array.isArray(projetElement)) {
          // Alors on recupere save sa longueur dans {el}-index
          formData.append(`${el}-index`, `${projetElement.length}`);

          // Et ensuite on ajoute l'image, en base64, et le nom de l'image dans le FormData
          for (let index = 0; index < projetElement.length; index++) {
            const file = projetElement[index];

            const base64File = (await toBase64(file)) as string;

            formData.append(`${el}-${index}`, base64File);
            console.log(`${el}-${index}`);
            formData.append(`${el}-${index}-name`, file.name);
          }
        } else {
          // Sinon on dit qu'il n'a pas de longueur ( 0 ), et on ajoute l'image et son nom
          formData.append(`${el}-index`, "0");

          const base64File = (await toBase64(projetElement)) as string;

          formData.append(`${el}`, base64File);
          formData.append(`${el}-name`, projetElement.name);
        }
      }

      formData.append("name", element.name);
      formData.append("description", element.description);
      formData.append("competances", JSON.stringify(element.competances));
      formData.append("client", element.client);
      formData.append("service", element.service);
      formData.append("duree", element.duree);

      if (element.lien && element.lien !== "") {
        formData.append("lien", element.lien);
      }
      const response = await fetch(
        `/api/projet/patchProjet`,
        {
          method: "PATCH",
          body: formData,
        },
      );
      const data = await response.json();

      return data;
  },

  // Update une competances
  UPDATECompetance: async (
    element: CompetanceForBack,
  ) => {
    if (element.name !== "" && element.image) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("type", element.type);

      const response = await fetch(
        `/api/competance/patchCompetance`,
        {
          method: "PATCH",
          body: formData,
        },
      );
      const data = await response.json();

      return data;
    }
  },

  // Update une review
  UPDATEReview: async ( element: ReviewForBack) => {
    if (
      element.imageName &&
      element.entrepriseName !== "" &&
      element.personne !== "" &&
      element.poste !== "" &&
      element.message !== ""
    ) {
      const base64File = (await toBase64(element.imageName)) as string;
      const formData = new FormData();
      formData.append("entreprise", element.entrepriseName);
      formData.append("image", base64File);
      formData.append("image-name", element.imageName.name);
      formData.append("stars", element.stars.toString());
      formData.append("personne", element.personne);
      formData.append("poste", element.poste);
      formData.append("message", element.message);

      const response = await fetch(
        `/api/review/patchReview`,
        {
          method: "PATCH",
          body: formData,
        },
      );
      const data = await response.json();

      return data;
    }
  },

  // Ajouter un projet
  NewProjet: async ( element: ProjetForBack) => {
      const formData = new FormData();

      // Boucler dans les index des image de element
      for (const el of imgKeys) {
        const projetElement = element[el] as File | File[];

        // Si c'est un array
        if (Array.isArray(projetElement)) {
          // Alors on recupere save sa longueur dans {el}-index
          formData.append(`${el}-index`, `${projetElement.length}`);

          // Et ensuite on ajoute l'image, en base64, et le nom de l'image dans le FormData
          for (let index = 0; index < projetElement.length; index++) {
            const file = projetElement[index];

            const base64File = (await toBase64(file)) as string;

            formData.append(`${el}-${index}`, base64File);
            console.log(`${el}-${index}`);
            formData.append(`${el}-${index}-name`, file.name);
          }
        } else {
          // Sinon on dit qu'il n'a pas de longueur ( 0 ), et on ajoute l'image et son nom
          formData.append(`${el}-index`, "0");

          const base64File = (await toBase64(projetElement)) as string;

          formData.append(`${el}`, base64File);
          formData.append(`${el}-name`, projetElement.name);
        }
      }

      formData.append("name", element.name);
      formData.append("description", element.description);
      formData.append("competances", JSON.stringify(element.competances));
      formData.append("client", element.client);
      formData.append("service", element.service);
      formData.append("duree", element.duree);

      if (element.lien && element.lien !== "") {
        formData.append("lien", element.lien);
      }
      const response = await fetch(
        `/api/projet/newProjet`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();

      return data;

  },

  // Ajouter une competance
  NewCompetance: async (
    element: CompetanceForBack,
  ) => {
    if (element.name !== "" && element.image) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("type", element.type);

      const response = await fetch(`/api/competance/newCompetance`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      return data;
    }
  },

  // Ajouter une review
  NewReview: async ( element: ReviewForBack) => {
    if (
      element.imageName &&
      element.entrepriseName !== "" &&
      element.personne !== "" &&
      element.poste !== "" &&
      element.message !== ""
    ) {
      const base64File = (await toBase64(element.imageName)) as string;
      const formData = new FormData();
      formData.append("entreprise", element.entrepriseName);
      formData.append("image", base64File);
      formData.append("image-name", element.imageName.name);
      formData.append("stars", element.stars.toString());
      formData.append("personne", element.personne);
      formData.append("poste", element.poste);
      formData.append("message", element.message);

      const response = await fetch(`/api/review/newReview`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      return data;
    }
  },
};

export default useFetch;

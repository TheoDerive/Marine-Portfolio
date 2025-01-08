import toBase64 from "@/lib/base64";
import { CompetanceForBack } from "@/types/competanceType";
import { ProjetForBack } from "@/types/projetType";
import { ReviewForBack } from "@/types/reviewType";

type categorieType = "competance" | "projet" | "review";

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
  UPDATEProjet: async (categorie: categorieType, element: ProjetForBack) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    if (
      element.name !== "" &&
      element.image &&
      element.description !== "" &&
      element.entreprise !== "" &&
      element.date !== ""
    ) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("description", element.description);
      formData.append("competances", JSON.stringify(element.competances));
      formData.append("entreprise", element.entreprise);
      formData.append("date", element.date);
      const response = await fetch(
        `/api/${categorie}/patch${updatedCategorie}`,
        {
          method: "PATCH",
          body: formData,
        },
      );
      const data = await response.json();

      return data;
    }
  },

  // Update une competances
  UPDATECompetance: async (
    categorie: categorieType,
    element: CompetanceForBack,
  ) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);
    if (element.name !== "" && element.image) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("type", element.type);

      const response = await fetch(
        `/api/${categorie}/patch${updatedCategorie}`,
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
  UPDATEReview: async (categorie: categorieType, element: ReviewForBack) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);
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
        `/api/${categorie}/patch${updatedCategorie}`,
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
  NewProjet: async (categorie: categorieType, element: ProjetForBack) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    if (
      element.name !== "" &&
      element.image &&
      element.description !== "" &&
      element.entreprise !== "" &&
      element.date !== ""
    ) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("description", element.description);
      formData.append("competances", JSON.stringify(element.competances));
      formData.append("entreprise", element.entreprise);
      formData.append("date", element.date);

      const response = await fetch(`/api/${categorie}/new${updatedCategorie}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      return data;
    }
  },

  // Ajouter une competance
  NewCompetance: async (
    categorie: categorieType,
    element: CompetanceForBack,
  ) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

    if (element.name !== "" && element.image) {
      const base64File = (await toBase64(element.image)) as string;
      const formData = new FormData();
      formData.append("name", element.name);
      formData.append("image", base64File);
      formData.append("image-name", element.image.name);
      formData.append("type", element.type);

      const response = await fetch(`/api/${categorie}/new${updatedCategorie}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      return data;
    }
  },

  // Ajouter une review
  NewReview: async (categorie: categorieType, element: ReviewForBack) => {
    const updatedCategorie =
      categorie.charAt(0).toUpperCase() + categorie.slice(1);

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

      const response = await fetch(`/api/${categorie}/new${updatedCategorie}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      return data;
    }
  },
};

export default useFetch;

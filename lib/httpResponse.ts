import { CompetanceType } from "@/types/competanceType";
import { StatusCode } from "@/types/enumStatusCode";
import { ProjetType } from "@/types/projetType";
import { ReviewType } from "@/types/reviewType";
import { NextResponse } from "next/server";

export default function httpResponse(
  status: StatusCode,
  data?: (CompetanceType | ProjetType | ReviewType)[],
) {
  let message = "";

  switch (status) {
    case StatusCode.Success:
      message = "Votre requete a ete une reussite";
      break;

    case StatusCode.NotFound:
      message = "Nous n'avons pas trouver de donnees valide pour votre demande";
      break;

    case StatusCode.UnAuthorized:
      message = "Vous n'etes pas autoriser a realiser cette requete";
      break;

    case StatusCode.InternalError:
      message =
        "Nous avons rencontrer une erreur interne lors de votre demande, veuillez reessayer";
      break;

    case StatusCode.Conflict:
      message =
        "L'element que vous essayer d'ajouter existe deja, ou est trop similaire a un autre element";
      break;

    case StatusCode.UnprocessableEntity:
      message = "Il manque des donnees pour satisfaire la requete";
      break;

    default:
      break;
  }

  return NextResponse.json(
    {
      data,
      status,
      message,
    },
    {
      status,
    },
  );
}

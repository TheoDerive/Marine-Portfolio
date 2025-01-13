import { ProjetType } from "@/types/projetType";
import Link from "next/link";

export default function ProjetArticle({ projet }: { projet: ProjetType }) {
  return (
    <Link href={`/projets/${projet._id}`} className="projet-article">
      <div className="projet-image-container">
        <img src={`/images/projet/${projet.presImg}`} />
      </div>

      <h2>{projet.name}</h2>

      <ul className="projet-article-tags-container">
        {projet.competances.map((comp, i) =>
          comp !== "" && comp !== "[]" ? (
            <li key={i} className="projet-tag">
              {comp}
            </li>
          ) : null,
        )}
      </ul>
      <p>{projet.description}</p>
    </Link>
  );
}

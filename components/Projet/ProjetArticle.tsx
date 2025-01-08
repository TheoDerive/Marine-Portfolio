import { ProjetType } from "@/types/projetType";
import Link from "next/link";

export default function ProjetArticle({ projet }: { projet: ProjetType }) {
  return (
    <Link href={`/projets/${projet._id}`} className="projet-article">
      <div className="projet-image-container">
        <img src={projet.image} />
      </div>

      <h2>{projet.name}</h2>

      <ul className="projet-article-tags-container">
        <li className="projet-tag">Image de Marque</li>

        <li className="projet-tag">Logo</li>
      </ul>
      <p>{projet.description}</p>
    </Link>
  );
}

import { ProjetType } from "@/types/projetType";
import Link from "next/link";

export default function ProjetHeader({ projet }: { projet: ProjetType }) {
  return (
    <section className="projet-header">
      <section className="projet-title-container">
        <h1>{projet.name}</h1>
        <p>{projet.description}</p>
      </section>

      <section className="projet-informations">
        <ul className="projet-page-tags">
          <li className="projet-tag">
            <h3 className="tag-title">Client</h3>
            <p>{projet.entreprise}</p>
          </li>

          <li className="projet-tag">
            <h3 className="tag-title">Service</h3>
            <ul className="tag-service">
              <li>UI / UX Design</li>
            </ul>
          </li>

          <li className="projet-tag">
            <h3 className="tag-title">Durée</h3>
            <p>6 semaines</p>
          </li>
        </ul>

        <Link href={"#"}>Voir le site</Link>
      </section>
    </section>
  );
}

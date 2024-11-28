import { ProjetComponent } from "../Projet";

export default function HomeProjets() {
  return (
    <section className="projets-homepage-container">
      <h2 className="section-title">Projets Recents</h2>

      <section className="projets-homepage">
        <ProjetComponent />
        <ProjetComponent />
        <ProjetComponent />
      </section>
    </section>
  );
}

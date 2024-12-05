import { ProjetComponent } from "../Projet";

export default function HomeProjets() {
  return (
    <section className="projets-homepage-container">
      <h2 className="section-title">
        Projets <span>Recents</span>
      </h2>

      <section className="mobile-scroll-container">
        <section className="projets-homepage">
          <ProjetComponent />
          <ProjetComponent />
          <ProjetComponent />
        </section>
      </section>
    </section>
  );
}

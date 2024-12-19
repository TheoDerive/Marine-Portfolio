export default function HomeHeader() {
  return (
    <section className="header-homepage">
      <div className="eclipse-rose" />
      <div className="right">
        <div className="right-informations">
          <p>Bienvenue sur mon portfolio</p>
          <img className="right-image" src="/images/hi-marine.png" />
        </div>
      </div>

      <div className="left">
        <h1 className="header-homepage-title">
          Marketing <span className="header-special-word">Digital</span> <br />{" "}
          & Communication <span className="header-point">.</span>
        </h1>
        <button className="header-homepage-button">
          Prendre Contact
          <img
            className="header-homepage-button-icon"
            src="/images/coucou-icon.png"
          />
        </button>

        <ul className="left-usefull-information">
          <li>
            <span className="number-information">+10</span>
            <span className="text-information">
              Stratégies marketing conçues et présentées
            </span>
          </li>

          <li>
            <span className="number-information">+5</span>
            <span className="text-information">Certifications obtenues</span>
          </li>

          <li>
            <span className="number-information">+10</span>
            <span className="text-information">
              Outils Stratégiques maitrisées
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

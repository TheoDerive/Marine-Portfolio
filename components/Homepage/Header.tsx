export default function HomeHeader() {
  return (
    <section className="header-homepage">
      <div className="right">
        <div className="right-informations">
          <p>Bienvenu sur mon portfolio</p>
          <img className="right-image" src="/images/hi-marine.png" />
        </div>
      </div>

      <div className="left">
        <h1 className="header-homepage-title">
          Marketing <span className="header-special-word">Digital</span> <br />{" "}
          & Communication <span className="header-point">.</span>
        </h1>
        <p style={{ marginTop: "-20px", fontSize: "18px", width: "80%" }}>
          Je <strong>cree</strong> une connexion <strong>fortes</strong> avec
          une <strong>strategie</strong> de contenu{" "}
          <strong>percurante !</strong>
        </p>
        <button className="header-homepage-button">
          Prendre Contact
          <img
            className="header-homepage-button-icon"
            src="/images/coucou-icon.png"
          />
        </button>
      </div>
    </section>
  );
}

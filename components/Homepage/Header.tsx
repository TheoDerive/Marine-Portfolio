export default function HomeHeader() {
  return (
    <section className="header-homepage">
      <div className="right">
        <div className="right-informations">
          <p>Bonjour, je suis Marine</p>
          <img className="right-image" src="/images/hi-marine.png" />
        </div>
      </div>

      <div className="left">
        <h1 className="header-homepage-title">
          MARKETING DIGITAL & <br /> COMMUNICATION
        </h1>
        <button className="header-homepage-button">
          Prendre contact{" "}
          <img
            className="header-homepage-button-icon"
            src="/images/coucou-icon.png"
          />
        </button>
      </div>
    </section>
  );
}

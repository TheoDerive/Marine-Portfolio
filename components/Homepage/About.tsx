import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeAbout() {
  return (
    <section className="about-homepage-container">
      <h2 className="section-title">A propos de moi</h2>

      <section className="about-homepage">
        <section className="left">
          <div className="left-informations">
            <div className="image-container">
              <img className="left-image" src="/images/marine-secret.png" />
            </div>
            Marine Sicaud
            <div className="button-container">
              <button className="boutton-about button-contact">
                Contact <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="boutton-about button-linkedin">
                Linkedin <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

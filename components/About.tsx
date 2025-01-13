import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerCompetances from "./ContainerCompetances";
import Link from "next/link";

export default function About() {
  return (
    <section className="about-container">
      <section className="about">
        <section className="left">
          <div className="left-informations">
            <div className="image-container">
              <img className="left-image" src="/images/marine-secret.png" />
            </div>
            Marine Sicaud
            <div className="button-container">
              <Link
                href={"mailto:marine.sicaud.pro@gmail.com"}
                className="boutton-about button-contact"
              >
                Contact <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/marine-sicaud/"}
                className="boutton-about button-linkedin"
              >
                Linkedin <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </section>
      </section>
      <ContainerCompetances />
    </section>
  );
}

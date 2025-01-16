import useAnimation from "@/hooks/useAnimation";
import LetterAnimation from "../LetterAnimation";
import Link from "next/link";

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
          <LetterAnimation text="Marketing " delay={.3}/> {' '}
          <span className="header-special-word">
          <LetterAnimation text="Digital" delay={.45} />
          </span>{" "}
          <br />
          <LetterAnimation text="& Communication" delay={.9} />
          <span className="header-point">
          <LetterAnimation text="." delay={1.65} />
          </span>
        </h1>
        <Link href={"mailto:sicaud.marine.pro@gmail.com"} className="header-homepage-button">
          Contactez-moi
          <img
            className="header-homepage-button-icon"
            src="/images/coucou-icon.png"
          />
        </Link>

        <ul className="left-usefull-information">
          <li>
            <span className="number-information"><LetterAnimation text="+10" delay={2.3} /></span>
            <span className="text-information">
              <LetterAnimation text="Stratégies marketing conçues et présentées" delay={2.3}/>
            </span>
          </li>

          <li>
            <span className="number-information"><LetterAnimation text="+5" delay={2.3} /></span>
            <span className="text-information">
              <LetterAnimation text="Certifications obtenues" delay={2.3}/>
            </span>
          </li>

          <li>
            <span className="number-information"><LetterAnimation text="+10" delay={2.3} /></span>
            <span className="text-information">
              <LetterAnimation text="Outils Stratégiques maitrisés" delay={2.3}/>
            </span>
              
          </li>
        </ul>
      </div>
    </section>
  );
}

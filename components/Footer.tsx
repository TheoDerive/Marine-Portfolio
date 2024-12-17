"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer>
      <h3 className="footer-title">Travaillons enssemble !</h3>
      <section className="footer-informations">
        <section className="footer-left">
          <section className="footer-telephone">
            <h4 className="information-title">Telephone</h4>
            <h3 className="information">06.13.81.09.81</h3>
          </section>

          <section className="footer-mail">
            <h4 className="information-title">Mail</h4>
            <h3 className="information">
              sicaud.marine.pro
              <a
                href="mailto:sicaud.marine.pro@gmail.com"
                className="email-container"
              >
                <span>@gmail.com</span>
              </a>
            </h3>
          </section>
        </section>
        <section className="footer-right">
          <h3 className="information">On discute ?</h3>
        </section>
      </section>
    </footer>
  );
}

export function FooterTest() {
  const [isPause, setIsPause] = React.useState<boolean>(false);
  return (
    <footer>
      <p>
        Travaillons <span className="special-word">Ensemble</span> !
      </p>

      <section className="footer-slider-container">
        <section
          className="footer-slider"
          style={{ animationPlayState: isPause ? "paused" : "running" }}
          onMouseEnter={() => setIsPause(true)}
          onMouseLeave={() => setIsPause(false)}
        >
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
        </section>
        <section
          className="footer-slider"
          style={{ animationPlayState: isPause ? "paused" : "running" }}
          onMouseEnter={() => setIsPause(true)}
          onMouseLeave={() => setIsPause(false)}
        >
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-orange">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-rose">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
          <li className="future-violet">
            CONTACTEZ-MOI
            <span className="footer-element-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </li>
        </section>
      </section>

      <h2 className="footer-title">MARINE SICAUD</h2>

      <section className="footer-social-media">
        <Link href={"#"} className="social-media">
          <section className="social-media-container">
            <span>Linkedin</span>
            <span>Linkedin</span>
          </section>
        </Link>
      </section>
    </footer>
  );
}

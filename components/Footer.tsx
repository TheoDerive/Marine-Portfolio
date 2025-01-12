"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export function Footer() {
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
        <Link href={"#"} className="social-media">
          <section className="social-media-container">
            <span>Gmail</span>
            <span>Gmail</span>
          </section>
        </Link>
        <Link href={"#"} className="social-media">
          <section className="social-media-container">
            <span>Behance</span>
            <span>Behance</span>
          </section>
        </Link>
      </section>
    </footer>
  );
}

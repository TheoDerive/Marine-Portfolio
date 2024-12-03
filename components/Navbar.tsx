"use client";

import { useAppStore } from "@/store";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [activeNavbar, setActiveNavbar] = React.useState<boolean>(false);

  const { scrollPosition } = useAppStore();

  React.useEffect(() => {
    if (scrollPosition >= 100) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  }, [scrollPosition]);

  return (
    <nav className={`navbar${activeNavbar ? "-active" : ""}`}>
      <Link href={"/"} className="logo-container">
        <img src="/images/logo.png" />
      </Link>

      <ul className="navbar-onglet-container">
        <li className="onglet onglet-rose">
          <Link href={"/about"}>A propos</Link>
        </li>

        <li className="onglet onglet-orange">
          <Link href={"/projets"}>Projets</Link>
        </li>

        <li className="onglet contact">
          <Link href={"mailto:sicaud.marine.pro@gmail.com"}>
            Contact <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

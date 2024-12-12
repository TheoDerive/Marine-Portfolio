"use client";

import useUtilities from "@/hooks/useUtilities";
import { useAppStore } from "@/store";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import {usePathname } from "next/navigation";

export default function Navbar() {
  const { windowProperties } = useUtilities();
  return (
    <>
      {windowProperties && windowProperties.innerWidth > 480 ? (
        <DesktopNav />
      ) : (
        <MobileNav />
      )}
    </>
  );
}

function DesktopNav() {
  const [activeNavbar, setActiveNavbar] = React.useState<boolean>(false);
  const [activeOnglet, setActiveOnglet] = React.useState({
    profil: false,
    projets: false
  });

  const pathname = usePathname()

  const { scrollPosition } = useAppStore();

  React.useEffect(() => {
    if (scrollPosition >= 100) {
      setActiveNavbar(true);
    } else {
      setActiveNavbar(false);
    }
  }, [scrollPosition]);


  React.useEffect(() => {
    switch (pathname) {
      case "/projets":
        setActiveOnglet({
          profil: false,
          projets: true,
        })
            break

      case "/profil":
        setActiveOnglet({
          projets: false,
          profil: true,
        })
        break

      default:
        setActiveOnglet({
          profil: false,
          projets: false
        })
        break
    }
  }, [pathname])

  return (
    <nav className={`desktop-navbar${activeNavbar ? "-active" : ""}`}>
      <Link href={"/"} className="logo-container">
        <img src="/images/logo.png" />
      </Link>

      <ul className="navbar-onglet-container">
        <li className={`onglet onglet-rose ${activeOnglet.profil ? "onglet-active" : ""}`}>
          <Link href={"/profil"}>Profil</Link>
        </li>

        <li className={`onglet onglet-orange ${activeOnglet.projets ? "onglet-active" : ""}`}>
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

function MobileNav() {
  const [openNavbar, setOpenNavbar] = React.useState<boolean>(false);

  function open() {
    const html = document.querySelector("html");
    if (!html) return;

    setOpenNavbar(true);
    html.style.overflowY = "hidden";
  }

  function close() {
    const html = document.querySelector("html");
    if (!html) return;

    setOpenNavbar(false);
    html.style.overflowY = "unset";
  }

  return (
    <nav
      className={`mobile-navbar mobile-navbar${openNavbar ? "-active" : ""}`}
    >
      <Link href={"/"} className="logo-container">
        Marine Sicaud
      </Link>

      <span className="burger-container" onClick={() => open()}>
        <span className="burger" />
      </span>

      <section className="menu-navbar">
        <span className="eclipses" />

        <ul className="navbar-onglet-container">
          <span className="close" onClick={() => close()} />
          <li className="onglet">
            <Link href={"/"}>Accueil</Link>
          </li>
          <li className="onglet ">
            <Link href={"/about"}>Profil</Link>
          </li>

          <li className="onglet ">
            <Link href={"/projets"}>Projets</Link>
          </li>
        </ul>

        <button className="nav-button">
          Parlons-en <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <span className="social">
          <Link href="">Linkedin</Link>
        </span>
      </section>
    </nav>
  );
}

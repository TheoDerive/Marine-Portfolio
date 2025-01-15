"use client";

import Link from "next/link";
import React from "react";

export default function HomeCategories() {
  return (
    <section className="categories-homepage-container">
      <div className="orange-eclipse" />
      <div className="slider-container" style={{ rotate: "-2deg" }}>
        <div className="slider right">
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
        </div>
        <div className="slider right">
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
        </div>
      </div>

      <ul className="categories-homepage">
        <Link href={"/projets/marketing"} className="categorie-homepage">
          <span>Marketing</span>
        </Link>
        <Link href={"/projets/logofolio"} className="categorie-homepage">
          <span>Logofolio</span>
        </Link>
        <Link href={"/projets/branding"} className="categorie-homepage">
          <span>Branding</span>
        </Link>
      </ul>

      <div className="slider-container" style={{ rotate: "2deg" }}>
        <div className="slider left">
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
        </div>
        <div className="slider left">
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
          <span>PROJETS</span>
        </div>
      </div>
    </section>
  );
}

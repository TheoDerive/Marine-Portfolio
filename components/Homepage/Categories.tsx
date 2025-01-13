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
        <li className="categorie-homepage">
          <span>Marketing</span>
        </li>
        <li className="categorie-homepage">
          <span>Logofolio</span>
        </li>
        <li className="categorie-homepage">
          <span>Branding</span>
        </li>
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

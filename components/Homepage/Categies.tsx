import Link from "next/link";

export default function HomeCategories() {
  return (
    <section className="categories-homepage-container">
      <div className="slider-container right">
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

      <ul className="categories-homepage">
        <li className="categorie-homepage">
          <Link href={"/marketing"}>Marketing</Link>
        </li>
        <li className="categorie-homepage">
          <Link href={"/logofolio"}>Logofolio</Link>
        </li>
        <li className="categorie-homepage">
          <Link href={"/branding"}>Branding</Link>
        </li>
      </ul>

      <div className="slider-container left">
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
    </section>
  );
}

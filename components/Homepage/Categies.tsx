import Link from "next/link";

export default function HomeCategories() {
  return (
    <section className="categories-homepage-container">
      <div className="slider-container right">
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
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
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
      </div>
    </section>
  );
}

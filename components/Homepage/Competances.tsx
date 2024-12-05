"use client";

import useUtilities from "@/hooks/useUtilities";

export default function HomeCompetences() {
  const { windowProperties } = useUtilities();
  return (
    <>
      {windowProperties && windowProperties.innerWidth > 480 ? (
        <DesktopCompetances />
      ) : (
        <MobileCompetances />
      )}
    </>
  );
}

function DesktopCompetances() {
  return (
    <section className="competences-homepage-container">
      <h3 className="section-title">Competences</h3>

      <ul className="competences-homepage">
        <li>
          <img src="/images/Photoshop.png" />
          Photoshop
        </li>

        <li>
          <img src="/images/Illustrator.png" />
          Illustrator
        </li>
        <li>
          <img src="/images/InDesign.png" />
          InDesign
        </li>

        <li>
          <img src="/images/Canva.png" />
          Canva
        </li>

        <li>
          <img src="/images/Figma.png" />
          Figma
        </li>

        <li>
          <img src="/images/Semrush.png" />
          Semrush
        </li>

        <li>
          <img src="/images/Wordpress.png" />
          Wordpress
        </li>

        <li>
          <img src="/images/Notion.png" />
          Notion
        </li>

        <li>
          <img src="/images/Hubspot.png" />
          Hubspot
        </li>

        <li>
          <img src="/images/Mailchimp.png" />
          Mailchimp
        </li>
      </ul>
    </section>
  );
}

function MobileCompetances() {
  return (
    <section className="competences-homepage-container">
      <h3 className="section-title">Competences</h3>

      <section className="design-scroll-container">
        <ul className="competences-homepage">
          <li>
            <img src="/images/Photoshop.png" />
            Photoshop
          </li>

          <li>
            <img src="/images/Illustrator.png" />
            Illustrator
          </li>
          <li>
            <img src="/images/InDesign.png" />
            InDesign
          </li>

          <li>
            <img src="/images/Canva.png" />
            Canva
          </li>

          <li>
            <img src="/images/Figma.png" />
            Figma
          </li>

          <li>
            <img src="/images/Photoshop.png" />
            Photoshop
          </li>

          <li>
            <img src="/images/Illustrator.png" />
            Illustrator
          </li>
          <li>
            <img src="/images/InDesign.png" />
            InDesign
          </li>

          <li>
            <img src="/images/Canva.png" />
            Canva
          </li>

          <li>
            <img src="/images/Figma.png" />
            Figma
          </li>
        </ul>
      </section>

      <section className="marketing-scroll-container">
        <ul className="competences-homepage">
          <li>
            <img src="/images/Semrush.png" />
            Semrush
          </li>

          <li>
            <img src="/images/Wordpress.png" />
            Wordpress
          </li>

          <li>
            <img src="/images/Notion.png" />
            Notion
          </li>

          <li>
            <img src="/images/Hubspot.png" />
            Hubspot
          </li>

          <li>
            <img src="/images/Mailchimp.png" />
            Mailchimp
          </li>
          <li>
            <img src="/images/Semrush.png" />
            Semrush
          </li>

          <li>
            <img src="/images/Wordpress.png" />
            Wordpress
          </li>

          <li>
            <img src="/images/Notion.png" />
            Notion
          </li>

          <li>
            <img src="/images/Hubspot.png" />
            Hubspot
          </li>

          <li>
            <img src="/images/Mailchimp.png" />
            Mailchimp
          </li>
        </ul>
      </section>
    </section>
  );
}

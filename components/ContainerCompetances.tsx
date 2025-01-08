import { ProfilCompetances } from "@/lib/ProfilCompetance";
import React from "react";

export default function ContainerCompetances() {
  const containerRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (!containerRef.current) return;
    const profilCompetance = new ProfilCompetances(containerRef.current);

    profilCompetance.createHTMLElement(10, 0, 100, 50);
    profilCompetance.createHTMLElement(150, 0, 100, 50);
    loop();

    function loop() {
      window.requestAnimationFrame(loop);
      profilCompetance.update();
    }
  }, []);
  return (
    <section className="container-competances-section">
      <section className="container-competances" ref={containerRef}></section>
    </section>
  );
}

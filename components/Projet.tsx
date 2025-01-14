import { ProjetType } from "@/types/projetType";
import Link from "next/link";
import React from "react";

export function ProjetComponent({ projet }: { projet: ProjetType }) {
  const [position, setPosition] = React.useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [move, setMove] = React.useState(false);

  const projetRef = React.useRef<HTMLAnchorElement>(null);
  const mouseRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!projetRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current || !projetRef.current) return;

      const rect = projetRef.current.getBoundingClientRect();

      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const mouseEnter = () => {
      if (!mouseRef.current) return;

      setMove(true);
      mouseRef.current.style.opacity = "1";
    };

    const mouseLeave = () => {
      if (!mouseRef.current) return;

      setMove(false);
      mouseRef.current.style.opacity = "0";
    };

    projetRef.current.addEventListener("mousemove", handleMouseMove);
    projetRef.current.addEventListener("mouseenter", mouseEnter);
    projetRef.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (!projetRef.current) return;
      projetRef.current.removeEventListener("mousemove", handleMouseMove);
      projetRef.current.removeEventListener("mouseenter", mouseEnter);
      projetRef.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, [projetRef, mouseRef]);

  return (
    <Link
      href={`/projets/${projet._id}`}
      className="projet-component"
      ref={projetRef}
    >
      <span
        className="view-follow"
        ref={mouseRef}
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      >
        Voir
      </span>
      <img src={`/images/projet/${projet.presImg}`} />
    </Link>
  );
}

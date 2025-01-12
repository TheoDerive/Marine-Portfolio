import { ProjetType } from "@/types/projetType";
import Link from "next/link";

export function ProjetComponent({ projet }: { projet: ProjetType }) {
  return (
    <Link href={`/projets/${projet._id}`} className="projet-component">
      <img src={`/images/projet/${projet.presImg}`} />
    </Link>
  );
}

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getRandomNumber } from "@/lib/randomNumber";
import useUtilities from "@/hooks/useUtilities";

const colors: string[] = ["#f874d8", "#b992f9", "#ff852b"];

type CompetancesProfilType = {
  text: string;
  color: number;
  position: {
    x: number;
    y: number;
    deg: number;
  };
};

export default function ContainercCompetances() {
  const [competances, setCompetances] = React.useState<CompetancesProfilType[]>(
    [],
  );

  const elementRef = React.useRef<(HTMLLIElement | null)[]>([]);

  const { windowProperties } = useUtilities();

  useGSAP(() => {
    if (!elementRef.current) return;
    for (let index = 0; index < elementRef.current.length; index++) {
      const el = elementRef.current[index] as HTMLElement;

      gsap.from(el.style, {
        transform: `translate(-50%, -${getRandomNumber(300, 700)}%)`,
      });
      gsap.to(el.style, {
        transform: `translate(-50%, -50%)`,
        duration: 2,
        ease: "bounce.out",
      });
    }
  }, [elementRef]);

  React.useEffect(() => {
    if (!windowProperties) return;

    setCompetances([
      {
        text: "Perseverence",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 5,
          y: 63,
          deg: 50,
        },
      },
      {
        text: "Autonomie",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 40,
          y: 50,
          deg: 4,
        },
      },

      {
        text: "Adatibiliter",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 58,
          y: 39,
          deg: 2,
        },
      },
      {
        text: "Organiser",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 73,
          y: 50,
          deg: 0,
        },
      },
      {
        text: "Creativiter",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 55,
          y: 60,
          deg: -2,
        },
      },

      {
        text: "Curieusiter",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 37,
          y: 72,
          deg: 0,
        },
      },
      {
        text: "Communication",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 80,
          y: 52,
          deg: -30,
        },
      },
      {
        text: "Leadership",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 48,
          y: 83,
          deg: 0,
        },
      },
      {
        text: "Autodidacte",
        color: getRandomNumber(0, colors.length),
        position: {
          x: 55,
          y: 92,
          deg: -5,
        },
      },
      {
        text: "Espris critique",
        color: getRandomNumber(0, colors.length - 1),
        position: {
          x: 11,
          y: 100 - (100 * 50) / windowProperties.innerHeight,
          deg: 45,
        },
      },
    ]);
  }, [windowProperties]);

  function handleHover(el: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (!elementRef.current) return;

    for (let i = 0; i < elementRef.current.length; i++) {
      const element = elementRef.current[i];

      if (element && element.id !== (el.target as HTMLElement).id) {
        element.classList.add("competance-active");
      }
    }
  }

  function handleUnHover() {
    if (!elementRef.current) return;

    for (let i = 0; i < elementRef.current.length; i++) {
      const element = elementRef.current[i];

      if (element) {
        element.classList.remove("competance-active");
      }
    }
  }

  return (
    <section className="container-competances-section">
      <h2 className="profil-title-header">SKILLS</h2>
      <ul className="container-competances">
        {competances.map((competance, i) => {
          return (
            <li
              ref={(el) => {
                elementRef.current[i] = el;
              }}
              key={i}
              id={`competance-${i}`}
              className="competance"
              style={{
                top: `${competance.position.y}%`,
                left: `${competance.position.x}%`,
                rotate: `${competance.position.deg}deg`,
                backgroundColor: `${colors[competance.color]}`,
              }}
              onMouseEnter={(el) => handleHover(el)}
              onMouseLeave={() => handleUnHover()}
            >
              {competance.text}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

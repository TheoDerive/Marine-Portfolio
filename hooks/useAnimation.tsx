import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

export default function useAnimation() {
  // Letter Animation
  const lettersRef = React.useRef<HTMLSpanElement[]>([]);
  const delayRef = React.useRef(0);

  useGSAP(() => {
    if (lettersRef.current.length === 0) return;

    lettersRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        y: 0,
        duration: 0.2,
        delay: delayRef.current + i / 20,
      });
    });
  }, [lettersRef.current]);

  function letterAnimaton(word: string, delay?: number): React.ReactNode {
    delayRef.current = 0;
    lettersRef.current = [];

    if (delay) {
      delayRef.current = delay;
    }

    return (
      <>
        {word.split("").map((w, i) =>
          w !== " " ? (
            <span key={i} className="letter-animation-container">
              <span
                className="letter-animation"
                ref={(el) => {
                  if (el) lettersRef.current[i] = el;
                }}
                style={{
                  transform: "translateY(200px)",
                }}
              >
                {w}
              </span>
            </span>
          ) : (
            w
          ),
        )}
      </>
    );
  }

  return { letterAnimaton };
}

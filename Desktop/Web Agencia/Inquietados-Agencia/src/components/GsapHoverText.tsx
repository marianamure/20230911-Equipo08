import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface GsapHoverTextProps {
  text: string;
  className?: string; // para pasarle clases de Tailwind si quieres
}

const GsapHoverText: React.FC<GsapHoverTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = textRef.current?.querySelectorAll("span");
    if (letters) {
      letters.forEach((letter) => {
        // Solo animar si no es un espacio
        if (letter.textContent !== " ") {
          gsap.set(letter, { y: 0 }); // Asegurarse de que la posición inicial sea 0

          letter.addEventListener("mouseenter", () => {
            gsap.to(letter, {
              y: -30,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true, // Evita conflictos con animaciones anteriores
            });
          });

          letter.addEventListener("mouseleave", () => {
            gsap.to(letter, {
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true, // Evita conflictos con animaciones anteriores
            });
          });
        }
      });
    }
  }, [text]);

  return (
    <div ref={textRef} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default GsapHoverText;

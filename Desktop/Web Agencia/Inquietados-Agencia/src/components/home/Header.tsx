import { useEffect, useRef } from "react";
import gsap from "gsap";
import Miscellany from "../others/Miscellany";
import Button from "../Button";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters: any = titleRef.current?.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 2,
        ease: "elastic",
      }
    );
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const letter = e.currentTarget;
    const colors = ["#008446", "#0C5EEF", "#D326A2", "#FFBC05"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    gsap.to(letter, {
      scale: 1.2,
      y: -10,
      color: randomColor,
      rotation: Math.random() * 10 - 10,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const letter = e.currentTarget;

    gsap.to(letter, {
      scale: 1,
      y: 0,
      color: "#f5f5dc",
      rotation: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  // Dividir el texto en palabras y luego en letras
  const renderWords = () => {
    const text = "Siempre con ganas de más.";
    const textSplit = text.split(" ");
    return textSplit.map((word, wordIndex) => (
      <span
        key={`word-${wordIndex}`}
        style={{
          whiteSpace: "nowrap", // Evita que las palabras se separen
          display: "inline-block",
          marginRight: "2rem", // Espaciado entre palabras
        }}
      >
        {word.split("").map((letter, letterIndex) => (
          <span
            key={`letter-${wordIndex}-${letterIndex}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "inline-block",
              cursor: "pointer",
              transformOrigin: "center center",
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    ));
  };
  return (
    <div className="h-screen bg-orange flex items-center justify-center header_home flex-col gap-20">
      <h1
        ref={titleRef}
        className="z-20 text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cream font-creative text-center sm:max-w-md md:max-w-3xl lg:max-w-5xl uppercase font-semibold leading-tight px-10 sm:px-0"
      >
        {renderWords()}
      </h1>
      <Miscellany />
      <Button
        title={"SCROLLEÁ"}
        iconA={<BsArrowDown />}
        iconB={<BsArrowDown />}
      />
    </div>
  );
};

export default Header;

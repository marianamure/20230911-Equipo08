import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";

const Button = ({ to, target, title, iconA, iconB, className }: any) => {
  const iconARef = useRef<HTMLSpanElement>(null);
  const iconBRef = useRef<HTMLSpanElement>(null);
  const buttonRef: any = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    gsap.to(iconARef.current, {
      x: -10,
      rotation: -20,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconBRef.current, {
      x: 10,
      rotation: 20,
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconARef.current, {
      x: 0,
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(iconBRef.current, {
      x: 0,
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const colors = ["bg-green", "bg-blue", "bg-pink", "bg-yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className={`z-50`}>
      <Link
        ref={buttonRef}
        target={target}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        to={to}
        className={`${randomColor} ${className} px-10 border-2 py-5 font-display font-medium rounded-full flex items-center gap-4 hover:scale-110 hover:-rotate-6 transition-all duration-75`}
      >
        <span ref={iconARef} className="flex items-center text-xl">
          {iconA}
        </span>
        {title}
        <span ref={iconBRef} className="flex items-center text-xl">
          {iconB}
        </span>
      </Link>
    </div>
  );
};

export default Button;

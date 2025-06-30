import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{ left: position.x + 10, top: position.y - 45 }}
    >
      <DotLottieReact
        src="https://lottie.host/d71da732-0c51-42d3-aca8-d063ab82cd3f/g56uK6WOce.lottie"
        loop
        autoplay
        width={120}
      />
    </div>
  );
};

export default CustomCursor;

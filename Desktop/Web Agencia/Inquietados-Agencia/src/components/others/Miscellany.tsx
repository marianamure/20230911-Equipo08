import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Miscellany = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imagesRef.current?.querySelectorAll("img");

    if (images) {
      const handleMouseMove = (event: MouseEvent) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;

        gsap.to(images, {
          x: (index) => (index % 2 === 0 ? x * 20 : x * -20),
          y: (index) => (index % 2 === 0 ? y * 20 : y * -20),
          rotation: (index) => (x + y) * (index % 2 === 0 ? 10 : -10),
          duration: 0.3,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <div ref={imagesRef} className="absolute w-full h-screen md:blur-sm -z-0">
      <img
        src="./images/misc/m1.webp"
        alt="miscelanea"
        className="absolute top-72 md:top-72 right-24 select-none"
        width={"10%"}
      />
      <img
        src="./images/misc/m2.webp"
        alt="miscelanea"
        className="absolute bottom-60 md:bottom-40 left-24 select-none"
        width={"13%"}
      />
      <img
        src="./images/misc/m3.webp"
        alt="miscelanea"
        className="absolute bottom-40 md:bottom-60 right-1/3 select-none"
        width={"10%"}
      />
      <img
        src="./images/misc/m4.webp"
        alt="miscelanea"
        className="absolute top-96 md:top-28 right-96 select-none"
        width={"10%"}
      />
      <img
        src="./images/misc/m5.webp"
        alt="miscelanea"
        className="absolute top-40 left-40 md:top-20 lg:left-80 select-none"
        width={"10%"}
      />
      <img
        src="./images/misc/m6.webp"
        alt="miscelanea"
        className="absolute bottom-96 md:bottom-20 left-1/3 select-none"
        width={"10%"}
      />
      <img
        src="./images/misc/m8.webp"
        alt="miscelanea"
        className="absolute bottom-96 md:bottom-20 right-40 select-none"
        width={"10%"}
      />
    </div>
  );
};

export default Miscellany;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SliderImg = ({ amount, column }: { amount: number; column: string }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      const items = slider.children;
      const numItems = items.length;

      for (let i = 0; i < numItems; i++) {
        const clone = items[i].cloneNode(true);
        slider.appendChild(clone);
      }

      const tl = gsap.fromTo(
        slider,
        { yPercent: 0 },
        {
          yPercent: amount,
          duration: 60,
          ease: "none",
          repeat: 1,
        }
      );

      slider.addEventListener("mouseenter", () => tl.pause());
      slider.addEventListener("mouseleave", () => tl.resume());
    }
  }, [amount]);

  return (
    <div ref={sliderRef} className={`flex ${column} gap-4 h-screen z-0`}>
      <div className="item">
        <img src="./images/slider1_1.webp" alt="Mateo" />
      </div>
      <div className="item">
        <img src="./images/slider1_2.webp" alt="Mica" />
      </div>
      <div className="item">
        <img src="./images/slider1_3.webp" alt="Stefano" />
      </div>
      <div className="item">
        <img src="./images/slider1_4.webp" alt="Cande" />
      </div>
      <div className="item">
        <img src="./images/slider1_5.webp" alt="Roni" />
      </div>
      <div className="item">
        <img src="./images/slider1_6.webp" alt="Belu" />
      </div>
    </div>
  );
};

export default SliderImg;

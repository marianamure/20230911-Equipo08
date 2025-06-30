import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PlayShowreelButton = () => {
  const rotateRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<GSAPTween | null>(null); // Ref para guardar la animación

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleVideoClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const url = {
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1740505119/Reel_Inquietados_Comprimido_grxjjr.mp4",
  };

  useEffect(() => {
    if (rotateRef.current) {
      animationRef.current = gsap.to(rotateRef.current, {
        rotate: 360,
        repeat: -1,
        ease: "linear",
        duration: 6,
      });
    }
  }, []);

  const handleMouseEnter = () => {
    animationRef.current?.timeScale(2);
  };

  const handleMouseLeave = () => {
    animationRef.current?.timeScale(1);
  };

  return (
    <>
      <div
        onClick={handleVideoClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="play-icon-overlay relative bg-white cursor-pointer overflow-hidden rounded-full w-32 h-32"
      >
        <img
          ref={rotateRef}
          src="/public/images/project/text-rounded.webp"
          alt="text-rounded-logo"
          className="w-full p-2"
        />
        <div className="play-icon-bg w-16 h-16 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full">
          <img
            src="/public/images/project/play.webp"
            alt="play-logo"
            className="w-8 h-8 p-1"
          />
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="relative px-20">
            <video src={url.video} autoPlay className="w-full h-full" />
            <button
              onClick={closePopup}
              className="absolute top-14 bg-blur w-12 right-6 text-black text-2xl bg-white rounded-full p-2 hover:bg-yellow"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayShowreelButton;

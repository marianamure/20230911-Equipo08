import { useState } from "react";
import CustomCursor from "./CustomCursor";

const VideoSee = ({ bannerVideo, video }: any) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {bannerVideo !== undefined ? (
        <section
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            src={bannerVideo}
            autoPlay
            loop
            muted
            className={`object-cover w-full`}
            onClick={handleVideoClick}
          />
          {isHovered && <CustomCursor />}{" "}
        </section>
      ) : (
        <img
          src="/public/images/project/shipCabinBanner.webp"
          alt="banner del proyecto"
          className="text-center mx-auto w-[1800px] h-[780px] object-cover rounded-3xl"
        />
      )}

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="relative px-20">
            <video src={video} autoPlay className="w-full h-full" />
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

export default VideoSee;

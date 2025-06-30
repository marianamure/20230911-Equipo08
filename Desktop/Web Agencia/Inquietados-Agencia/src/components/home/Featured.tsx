import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import MiscellanyFeatured from "../others/MiscellanyFeatured";
import ScrollDown from "../ScrollDown";
import VideoSee from "../VideoSee";
import CarrouselProjects from "../CarrouselProjects";

const Featured = () => {
  const url = {
    bannerVideo:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1736880785/reel_hpvpg3.mp4",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1740505119/Reel_Inquietados_Comprimido_grxjjr.mp4",
  };

  return (
    <>
      <section className="bg-black relative flex justify-center">
        <VideoSee bannerVideo={url.bannerVideo} video={url.video} />
        <div className="absolute top-0 text-white h-full flex flex-col justify-center items-center font-creative">
          <h2 className="text-8xl font-bold drop-shadow-lg">PROYECTOS</h2>
          <img
            src="./lineaTitle.svg"
            alt="linea Titulo detalle"
            className="w-full"
          />

          <h3 className="h3 text-8xl font-semibold">destacados</h3>
          <div className="absolute bottom-80">
            <ScrollDown />
          </div>
        </div>
      </section>

      <section className="bg-cream pt-32 pb-20 relative overflow-hidden">
        <MiscellanyFeatured />
        <CarrouselProjects />
        <div className="flex justify-center text-lg mt-16">
          <Button
            to={"/proyectos"}
            title={"VER TODOS"}
            iconB={<BsArrowRight />}
          />
        </div>
      </section>
    </>
  );
};

export default Featured;

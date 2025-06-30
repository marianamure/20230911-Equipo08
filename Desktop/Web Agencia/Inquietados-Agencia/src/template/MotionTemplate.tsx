import VideoSee from "../components/VideoSee";
import BotContainer from "../components/threefiber/BotContainer";
import GsapHoverText from "../components/GsapHoverText";
import { Project } from "../constants/projects";
import CategoryProject from "../components/CategoryProject";

const MotionTemplate = ({
  id,
  title,
  title2,
  category,
  bannerVideo,
  video,
  description,
  description2,
  model3D,
  title3,
  image2,
  image3,
  image4,
  image5,
  imageMajor,
}: Project) => {
  return (
    <section>
      <div className="container mx-auto pb-20">
        <div className="flex flex-col gap-10">
          <GsapHoverText
            text={title}
            className="uppercase h1 font-display z-10"
          />

          <div className="grid grid-cols-2 z-10">
            <div className="flex flex-col gap-4">
              <CategoryProject text={category} />
              <div>
                <ul className="uppercase">
                  <li>BLENDER</li>
                  <li>AFTER EFFECTS</li>
                  <li>MARMOSET</li>
                  <li>SUBSTANCE PAINTER</li>
                </ul>
              </div>
            </div>
            <div className="parrafo flex flex-col gap-4">
              <h2 className="h2 font-redHat font-semibold bg-gray-200 p-4 rounded-lg w-fit">
                {title2}
              </h2>
              <p className="text-2xl font-normal font-redHat mr-10">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <VideoSee bannerVideo={bannerVideo} video={video} />
      
      <div className="container mx-auto pt-20 flex flex-col gap-10">
        {description2 && (
          <div className="grid grid-cols-2 grid-rows-1 gap-10">
            <div>
              {model3D ? (
                <BotContainer id={id} />
              ) : (
                <img
                  src={imageMajor}
                  alt="video del proyecto"
                  className="rounded-lg w-full object-cover h-[800px]"
                />
              )}
            </div>

            {title3 && (
              <div className="flex flex-col justify-between gap-4 bg-gray-200 p-4 rounded-lg">
                <div className="flex flex-col gap-4 ">
                  <h2 className="h2 font-semibold">{title3}</h2>
                  <p className="text-2xl font-normal font-redHat">
                    {description2}
                  </p>
                </div>

                <img
                  src={image2}
                  alt="img detalle 2"
                  className="rounded-lg w-full object-cover h-96"
                />
              </div>
            )}
          </div>
        )}

        {image3 && (
          <div className="grid grid-cols-3 gap-5">
            <img
              src={image3}
              alt="Imagen proyectos 3"
              width={580}
              height={730}
              className="rounded-lg w-full object-cover h-[730px]"
            />
            <img
              src={image4}
              alt="Imagen proyectos 4"
              width={580}
              height={730}
              className="rounded-lg w-full object-cover h-[730px]"
            />
            <img
              src={image5}
              alt="Imagen proyectos 5"
              width={580}
              height={730}
              className="rounded-lg w-full object-cover h-[730px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MotionTemplate;

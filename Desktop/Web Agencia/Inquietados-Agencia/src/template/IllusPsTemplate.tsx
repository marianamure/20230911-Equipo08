import CategoryProject from "../components/CategoryProject";
import { Project } from "../constants/projects";
import BrandTemplate from "./BrandTemplate";

const IllusPsTemplate = ({
  image2,
  title,
  description,
  category,
  video,
  id,
}: Project) => {
  const isBrand = id === "23" || id === "24";
  const isPhotoOrIllus =
    id === "16" || id === "17" || id === "18" || id === "19" || id === "20";

  return (
    <>
      {isPhotoOrIllus && (
        <section className="container mx-auto pb-10 relative my-10">
          <div className="flex gap-10 justify-center">
            <div>
              {image2 && (
                <img
                  src={image2}
                  alt={`Imagen de zyra`}
                  className="max-w-[550px] rounded-2xl shadow-lg"
                />
              )}
              {video && (
                <video
                  src={video}
                  className="max-w-[550px] rounded-2xl shadow-lg"
                  controls
                  loop
                  muted
                  autoPlay
                />
              )}
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-6xl font-display font-semibold max-w-[550px]">
                {title}
              </h2>
              <p className="max-w-[550px] text-xl">{description}</p>
              <CategoryProject text={category} />
            </div>
          </div>
        </section>
      )}

      {isBrand && (
        <BrandTemplate
          title={title}
          description={description}
          image2={image2}
        />
      )}
    </>
  );
};

export default IllusPsTemplate;

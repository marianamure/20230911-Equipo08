import CategoryProject from "../components/CategoryProject";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Project } from "../constants/projects";

const WebTemplate = ({ title, description, link, image2, image3 }: Project) => {
  return (
    <section className="container mx-auto pb-10 relative">
      <div className="flex flex-col gap-20">
        <div className="flex gap-10">
          <img
            src={image2}
            alt="logo marca"
            className="w-fit h-fit max-w-[247px]"
          />
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 font-display text-sm">
              {title}
            </h2>
            <p className="text-2xl font-medium">{description}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <CategoryProject text={"Desarrollo web"} />
            <CategoryProject text={"Diseño Ux Ui"} />
          </div>
          <Link
            to={link}
            target="_blank"
            className="group relative inline-flex items-center gap-1 overflow-hidden rounded-full border border-blue px-6 py-2 text-lg font-creative text-blue transition-all duration-300 ease-in-out hover:bg-blue hover:text-white"
          >
            <span className="relative z-10">Sitio web</span>
            <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
            <span className="absolute inset-0 z-0 h-full w-full scale-0 rounded-full bg-blue transition-transform duration-300 group-hover:scale-100"></span>
          </Link>
        </div>

        <img src={image3} alt="sitio ronshop" className="rounded-2xl" />
      </div>
    </section>
  );
};

export default WebTemplate;

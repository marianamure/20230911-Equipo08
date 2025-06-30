import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  image: string | undefined;
  title: string;
}

const CardProject = ({ id, image, title }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 justify-center w-fit">
      <div className="relative group">
        <Link
          to={`/proyectos/${id}`}
          className="group relative block overflow-hidden rounded-xl border-2 border-black hover:border-orange transition-colors duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-[800px] h-[450px] eye-cursor object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-0 right-0 flex items-center gap-3 p-4 bg-orange hover:bg-pink rounded-ss-2xl rounded-ee-1xl text-2xl opacity-0 transform scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100 overflow-hidden origin-bottom-right">
            <FaArrowRight className="text-red-50 transition-all duration-700 ease-in-out -translate-x-10 group-hover:translate-x-0" />
          </div>
        </Link>
      </div>
      <h3 className="font-creative text-3xl font-medium">{title}</h3>
    </div>
  );
};

export default CardProject;

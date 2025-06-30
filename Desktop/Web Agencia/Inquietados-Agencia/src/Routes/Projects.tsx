import { ProjectsAll } from "../constants/projects";
import MiscellanyProjects from "../components/others/MiscellanyProjects";
import CardProject from "../components/CardProject";
import { Category } from "../constants/projects";
import { useState } from "react";
import GsapHoverText from "../components/GsapHoverText";
import PlayShowreelButton from "../components/others/PlayShowreelButton";
import { useSearchParams } from "react-router-dom";
import BasicPagination from "../components/BasicPagination";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "1";
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const itemsPerPage = 8;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(1);
    setSearchParams({ category: id, page: "1" });
  };

  const filteredProjects =
    activeCategory === "1"
      ? ProjectsAll
      : ProjectsAll.filter((project) => project.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
    setSearchParams({ category: activeCategory, page: value.toString() });
  };

  return (
    <section className="bg-cream relative overflow-hidden">
      <MiscellanyProjects />
      <section className="container mx-auto py-32">
        <div className="flex bg-orange-400 justify-between items-end px-10 mt-28">
          <div className="flex flex-col gap-2 max-w-3xl z-10">
            <GsapHoverText
              text={"NUESTRO PORTFOLIO"}
              className="uppercase z-10 font-creative h1"
            />
            <p className="font-redHat text-xl">
              Damos vida a tu proyecto combinando creatividad desbordante y
              tecnología de vanguardia. Aquí tienes un vistazo a nuestro
              trabajo.
            </p>
          </div>
          <PlayShowreelButton />
        </div>

        {/* Header con categorías */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 mt-24 relative">
            {Category.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`relative px-4 py-2 text-2xl font-bold tracking-wide transition-colors duration-300 font-redHat uppercase ${
                  activeCategory === category.id
                    ? "text-black"
                    : "text-[#81786a] hover:text-black"
                }`}
              >
                {category.name}
                {activeCategory === category.id && (
                  <div className="absolute bottom-1 left-0 right-0 h-1 bg-orange rounded-full"></div>
                )}
              </button>
            ))}

            <div className="w-full absolute h-0.5 bg-[#C9BAA0] bottom-0.5"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10 px-10 mt-14">
          {paginatedProjects.map((project) => (
            <CardProject
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
            />
          ))}
          {paginatedProjects.length === 0 && (
            <p className="text-center text-lg text-black mt-10 absolute">
              No hay proyectos para esta categoría por ahora.
            </p>
          )}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-14">
            <BasicPagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default Projects;

import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Category,
  Features,
  Project,
  ProjectsAll,
} from "../constants/projects";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import MotionTemplate from "../template/MotionTemplate";
import WebTemplate from "../template/WebTemplate";
import IllusPsTemplate from "../template/IllusPsTemplate";
import CarrouselProjects from "../components/CarrouselProjects";

const PageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [proyecto, setProyecto] = useState<Project | null>(null);

  const categoryName = useMemo(() => {
    if (!proyecto) return "";
    return Category.find((cat) => cat.id === proyecto.category)?.name || "";
  }, [proyecto]);

  useEffect(() => {
    const proyectoEncontrado =
      Features.find((feature) => feature.id === id) ||
      ProjectsAll.find((project) => project.id === id);

    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
  }, [id]);

  if (!proyecto) {
    return <div>Proyecto no encontrado</div>;
  }

  const isWebProject = ["2"].includes(proyecto.category);
  const isMotionOr3D = ["3", "4"].includes(proyecto.category);
  const isIllusOrPs = ["5"].includes(proyecto.category);

  const projectData = {
    ...proyecto,
    category: categoryName || "Sin categoría",
  };

  return (
    <div className="bg-gray-100 pb-20">
      <div>
        <div className="container mx-auto pt-64 pb-10 relative z-10">
          <BasicBreadcrumbs projectTitle={proyecto.title} />
        </div>
        <img
          src="https://res.cloudinary.com/dh5i1pozz/image/upload/v1739722699/yellowpatter_hl0ntz.svg"
          alt=""
          className="absolute -top-10 -left-40 -rotate-45"
        />
        <img
          src="https://res.cloudinary.com/dh5i1pozz/image/upload/v1739722699/hojablue_uvvzk3.svg"
          alt=""
          className="absolute top-10 right-0"
        />
      </div>

      {isMotionOr3D && <MotionTemplate {...projectData} />}
      {isWebProject && <WebTemplate {...projectData} />}
      {isIllusOrPs && <IllusPsTemplate {...projectData} />}

      <div className="text-center mt-10">
        <h2 className="h5 font-display font-semibold">GRACIAS</h2>
        <p className="h6 font-normal font-redHat">
          Muchas gracias al equipo de Inquietados.
        </p>
      </div>
      <div className="container mx-auto py-10">
        <h3 className="h3 font-medium">Proyectos Relacionados</h3>
      </div>
      <CarrouselProjects
        categoryFilter={proyecto.category}
        excludeId={proyecto.id}
      />
    </div>
  );
};

export default PageDetail;

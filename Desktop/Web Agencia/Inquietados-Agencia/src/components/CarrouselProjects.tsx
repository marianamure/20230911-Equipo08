// CarrouselProjects.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import CardProject from "./CardProject";
import { Project, ProjectsAll } from "../constants/projects";

interface CarrouselProps {
  categoryFilter?: string;
  excludeId?: string;
}

const CarrouselProjects = ({ categoryFilter, excludeId }: CarrouselProps) => {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorDir, setCursorDir] = useState<"left" | "right" | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      setCursorDir(x < width / 2 ? "left" : "right");
    }
  };

  const handleClick = () => {
    if (cursorDir === "left") swiperRef.current?.slidePrev();
    else if (cursorDir === "right") swiperRef.current?.slideNext();
  };

  const filteredProjects = ProjectsAll.filter((project: Project) => {
    if (categoryFilter) {
      return project.category === categoryFilter && project.id !== excludeId;
    }
    return project.destacted;
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${
        cursorDir === "left"
          ? "cursor-w-resize"
          : cursorDir === "right"
          ? "cursor-e-resize"
          : "cursor-default"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCursorDir(null)}
      onClick={handleClick}
    >
      <Swiper
        slidesPerView="auto"
        initialSlide={0}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ padding: "0 6%" }}
      >
        {filteredProjects.map((project: Project) => (
          <SwiperSlide key={project.id}>
            <CardProject
              id={project.id}
              image={project.image}
              title={project.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrouselProjects;

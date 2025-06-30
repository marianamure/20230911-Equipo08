import CategoryProject from "../components/CategoryProject";

const BrandTemplate = ({ title, description, image2 }: any) => {
  return (
    <section className="container mx-auto pb-10 relative my-10">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-creative">{title}</h1>
          <CategoryProject text="Diseño Gráfico" color="bg-blue" />
        </div>
        <p className="text-2xl font-redHat font-normal max-w-2xl">
          {description}
        </p>
      </div>
      <iframe
        className="w-full h-[800px] rounded-3xl shadow-lg"
        src={image2}
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default BrandTemplate;

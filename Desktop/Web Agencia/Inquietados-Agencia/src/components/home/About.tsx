import Miscellany from "../others/Miscellany";
import SliderImg from "./SliderImg";

const About = () => {
  return (
    <section className="h-[100vh] bg-black text-white relative overflow-hidden">
      <div className="flex justify-center items-center h-full absolute gap-10">
        <div className="w-[44%] p-10 flex flex-col gap-4 z-10">
          <div className="w-fit">
            <h4 className="text-xl font-creative">
              ¡Bienvenidos a Inquietados!
            </h4>
            <img src="./lineaTitle.svg" alt="Linea Titulo" className="w-full" />
          </div>
          <h3 className="md:text-1xl lg:text-3xl xl:text-4xl font-semibold">
            Nos esforzamos constantemente por avanzar, apoyándonos mutuamente
            para superar obstáculos e innovar juntos.
          </h3>
          <p className="text-md">
            Somos un equipo de profesionales de diversas áreas que trabajan de
            forma integral. Cada miembro es esencial, y cuando falta uno, los
            demás colaboran para garantizar el éxito continuo.
          </p>
        </div>

        <div className="flex gap-10 z-10">
          <SliderImg amount={-300} column={"flex-col"} />
          <SliderImg amount={300} column={"flex-col-reverse"} />
        </div>
      </div>

      <div className="absolute w-full h-full top-0 blur-md opacity-40">
        <Miscellany />
      </div>

      <img
        src="./images/misc/patron3.svg"
        alt="patron 3"
        className="absolute -top-10 -left-10"
      />
      <img
        src="./images/misc/patron2.svg"
        alt="patron 2"
        className="absolute bottom-0"
      />
      <img
        src="./images/misc/patron1.svg"
        alt="patron1"
        className="absolute left-2/4 top-1/4"
      />
    </section>
  );
};

export default About;

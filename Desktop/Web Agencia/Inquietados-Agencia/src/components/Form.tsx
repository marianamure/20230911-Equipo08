import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import FileChange from "./others/FileChange";
import MiscForm from "./others/MiscForm";

const Form = () => {
  return (
    <section className="bg-green py-32 text-center flex flex-col gap-20 contact relative overflow-hidden form_contact">
      <MiscForm />
      <h2 className="h2 text-center font-creative">
        ¿Un proyecto está corriendo por tu cabeza?
      </h2>
      <form className="flex flex-col items-center justify-center">
        <div className="flex gap-10 justify-center flex-wrap">
          <input
            type="text"
            placeholder="Nombre"
            className="h-96 w-96 rounded-full bg-transparent p-3 border-2 border-black text-center placeholder-black text-lg bg-input placeholder:text-lg"
          />
          <input
            type="email"
            placeholder="Correo"
            className="h-96 w-96 rounded-full bg-transparent p-3 border-2 border-black text-center placeholder-black text-lg bg-input"
          />
          <textarea
            name="textarea"
            id="textarea"
            placeholder="Mensaje"
            className="h-96 w-96 rounded-full bg-transparent px-10 border-2 border-black text-center placeholder-black text-lg bg-input resize-none"
            maxLength={270}
          ></textarea>
        </div>
        <div className="flex gap-5 justify-center mt-10">
          <FileChange />
          <Button
            className="text-lg"
            title={"Enviar"}
            iconB={<BsArrowRight />}
          />
        </div>
      </form>

      <div className="flex gap-10 justify-center text-lg">
        <p>
          <span className="font-semibold">Dirección</span> Av. Corrientes 2037,
          C1001 CABA
        </p>
        <p>
          <span className="font-semibold">Correo</span>{" "}
          <a
            href="mailto:inquietadosagencia@gmail.com"
            className="hover:underline"
          >
            inquietadosagencia@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Teléfono</span> 123-456-789
        </p>
      </div>
    </section>
  );
};

export default Form;

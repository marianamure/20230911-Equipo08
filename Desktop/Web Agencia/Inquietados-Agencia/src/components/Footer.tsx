import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-11 text-center flex flex-col gap-7">
      <div className="flex gap-10 justify-center items-center">
        <Link
          target="_blank"
          to={"https://www.behance.net/"}
          className="btn-footer"
        >
          BEHANCE
        </Link>
        <Link
          target="_blank"
          to={"https://www.artstation.com/inquietados"}
          className="btn-footer"
        >
          ARSTATION
        </Link>
        <Link
          target="_blank"
          to={"https://www.instagram.com/inquietados/"}
          className="btn-footer"
        >
          INSTAGRAM
        </Link>
      </div>
      <h3>HAGAMOS INQUIETAS TUS IDEAS♥️</h3>
    </footer>
  );
};

export default Footer;

import { Link, NavLink } from "react-router-dom";
import { navigation, NavigationItem } from "../constants/index";

const Navbar = () => {
  return (
    <nav className="top-5 fixed w-screen z-40">
      <div className="flex justify-between max-w-screen-2xl m-auto">
        <Link to="/">
          <div className="bg-black flex justify-center w-[60px] h-[60px] rounded-full">
            <img
              className="p-1.5"
              src="https://res.cloudinary.com/dh5i1pozz/image/upload/v1739904408/icon-logo_k5oqzg.svg"
              alt="Logo Inquietados"
              width={30}
            />
          </div>
        </Link>

        <div className="bg-black rounded-full flex items-center gap-6 font-creative px-10 overflow-hidden">
          {navigation.map(({ id, title, url }: NavigationItem) => (
            <NavLink
              key={id}
              to={url}
              className={({ isActive }) =>
                isActive
                  ? "bg-orange px-3 py-1.5 rounded-full text-white font-medium transition-all duration-500 ease-in-out"
                  : "hover:text-orange text-white font-medium transition-all duration-500 ease-in-out"
              }
            >
              {title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

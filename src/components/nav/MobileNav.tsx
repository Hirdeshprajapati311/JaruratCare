import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { urls } from "../../lib/util";
import { X } from "lucide-react";
import { toggle } from "../../store/slices/toggleSlice";

const MobileNav = () => {
  const dispatch = useDispatch(); 

  return (
    <div className="lg:hidden fixed inset-0 bg-slate-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 z-50">
      <button onClick={() => dispatch(toggle())} className="absolute top-6 right-6 text-white">
        <X />
      </button>
      <nav className="flex flex-col space-y-6 text-center">
        {urls.map((url) => (
          <NavLink
            to={url.path}
            key={url.path}
            onClick={() => dispatch(toggle())} 
            className={({ isActive }) =>
              `text-xl font-semibold tracking-wide transition duration-300 
              ${isActive ? "text-teal-400" : "text-gray-200 hover:text-teal-300"}`
            }
          >
            {url.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
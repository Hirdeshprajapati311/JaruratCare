import { NavLink } from "react-router-dom";
import { urls } from "../../lib/util";





const DesktopNav = () => {
  return (
    <nav className="hidden items-center justify-end bg-slate-800 lg:flex w-full space-x-4 h-10 pr-20">
      {urls.map((url) => (
        <NavLink
          to={url.path}
          key={url.path}
          className={({ isActive }) =>
            `text-white transition-colors duration-200 ${isActive ? "text-teal-200" : ""}`
          }
        >
          {url.name}
        </NavLink>
      ))}

     
      
    </nav>
  );
};

export default DesktopNav;
import { MenuSquare } from "lucide-react";
import MobileNav from "./nav/MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slices/toggleSlice";
import type { RootState } from "../store/store";


const Header = () => {

  const dispatch = useDispatch()
  const isMenuOpen = useSelector((state:RootState) => state.toggle.isMenuOpen)

  return (
    <div className='h-16 bg-slate-700 w-full flex items-center justify-center'>
      <span className="font-semibold underline text-white text-xl">Jarurat Care</span>
      <button className="absolute top-6 lg:hidden right-6" onClick={()=>dispatch(toggle())} ><MenuSquare /></button>
      {isMenuOpen && <MobileNav/>}
    </div>
  );
}

export default Header;

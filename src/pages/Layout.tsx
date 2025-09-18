import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import DesktopNav from '../components/nav/DesktopNav';

const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header />
      <DesktopNav />
      <Outlet/>
    </div>
  );
}

export default Layout;

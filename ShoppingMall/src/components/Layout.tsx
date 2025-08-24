import Header from './header';
import { Outlet } from 'react-router-dom';
import { useScroll } from '../context/ScrollContext';

function Layout() {
  const { isScrolled } = useScroll();

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Header />
      <main className={`transition-all duration-300 ${isScrolled ? 'pt-24' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout; 
import Header from './header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout; 
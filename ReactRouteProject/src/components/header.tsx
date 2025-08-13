import Logo from '../assets/VanLogo.svg'
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';


function Header() {

  const normal = "text-gray-600 underline-offset-3 text-sm hover:text-gray-950 hover:underline"
  const active = "text-gray-950 underline"

  return (
    <header className="bg-gray-50 py-4 text-center text-lg shadow-[0px_1px_0px_gray]/30 font-semibold text-gray-800">
      <div className='flex items-center justify-between gap-14 max-w-6xl mx-auto px-6'>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          <img src={Logo} alt="Van Logo" className="mx-auto w-28" />
        </Link>
        <nav>
          <ul className="flex justify-center space-x-6">
            <li id='about' aria-label='about'>
              <NavLink to="/about" className={({isActive})=>clsx(normal,isActive&&active)}>About</NavLink>
            </li>
            <li id='vans' aria-label='van'>
              <NavLink to="/vans" className={({isActive})=>clsx(normal,isActive&&active)}>Vans</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

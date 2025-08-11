import { Link } from 'react-router-dom';
import Logo from '../assets/VanLogo.svg'
function Header() {
  return (
    <header className="bg-gray-50 py-4 text-center text-lg font-semibold text-gray-800">
      <div className='flex items-center justify-around gap-14 max-w-6xl mx-auto px-4'>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          <img src={Logo} alt="Van Logo" className="mx-auto w-28" />
        </Link>
        <nav>
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/about" className="text-gray-600  text-sm">About</Link>
            </li>
            <li>
              <Link to="/vans" className=" text-gray-600 text-sm">Vans</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

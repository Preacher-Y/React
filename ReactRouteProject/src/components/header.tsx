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

          <ul className="flex justify-center items-center space-x-6">

            <li id='host'>
              <NavLink to="/host" className={({isActive})=>clsx(normal,isActive&&active)}>Host</NavLink>
            </li>

            <li id='about' aria-label='about'>
              <NavLink to="/about" className={({isActive})=>clsx(normal,isActive&&active)}>About</NavLink>
            </li>

            <li id='vans' aria-label='van'>
              <NavLink to="/vans" className={({isActive})=>clsx(normal,isActive&&active)}>Vans</NavLink>
            </li>

            {!localStorage.getItem("loggedIn")?(<li id='user' aria-label='user' className='flex'>
              <NavLink to="/SignIn" className="icon-[solar--user-circle-outline] text-xl text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300"/>
            </li>):(<li onClick={()=>localStorage.removeItem('loggedIn')} className='flex cursor-pointer gap-1 items-center text-sm group text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-300'>
              <h1 className='icon-[hugeicons--logout-04] group-hover:text-red-600'/>
              <p className='mt-0.5'>logout</p> 
            </li>)}

          </ul>

        </nav>

      </div>

    </header>
    
  );
}

export default Header;

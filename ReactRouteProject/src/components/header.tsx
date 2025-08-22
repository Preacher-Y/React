import Logo from '../assets/VanLogo.svg'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === 'true')
  const [show,setShow] = useState(false)
  const navigate = useNavigate()
  const dropDown = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const authChange = () => {
      setIsLoggedIn(localStorage.getItem("loggedIn") === 'true');
    }

    window.addEventListener('storage', authChange)
    window.addEventListener('authStateChanged', authChange)
    
    return () => {
      window.removeEventListener('storage', authChange)
      window.removeEventListener('authStateChanged', authChange)
    }
  }, [])

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (dropDown.current && !dropDown.current.contains(event.target as Node)) {
        setShow(false)
      }
    }

    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  }, [])

  function logOut() {
    localStorage.removeItem("loggedIn")
    localStorage.removeItem("id")
    localStorage.removeItem("img")
    setIsLoggedIn(false)
    setShow(false)
    window.dispatchEvent(new Event('authStateChanged'))
    navigate('/SignIn', { state: { message: "You have been Logged Out !" }, replace: true })
  }

  const normal = "text-gray-600 underline-offset-3 text-sm hover:text-gray-950 hover:underline"
  const active = "text-gray-950 underline"
  const img = localStorage.getItem('img')||""

  return (
    <header className="bg-gray-50 py-4 text-center text-lg shadow-[0px_1px_0px_gray]/30 font-semibold text-gray-800">
      <div className='flex items-center justify-between gap-14 max-w-6xl mx-auto px-6'>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          <img src={Logo} alt="Van Logo" className="mx-auto w-28" />
        </Link>

        <nav className="relative">
          <ul className="flex justify-center items-center space-x-6">
            <li id='host'>
              <NavLink to="/host" className={({ isActive }) => clsx(normal, isActive && active)}>Host</NavLink>
            </li>

            <li id='about' aria-label='about'>
              <NavLink to="/about" className={({ isActive }) => clsx(normal, isActive && active)}>About</NavLink>
            </li>

            <li id='vans' aria-label='van'>
              <NavLink to="/vans" className={({ isActive }) => clsx(normal, isActive && active)}>Vans</NavLink>
            </li>

            {!isLoggedIn ? (
              <li id='user' aria-label='user' className='flex'>
                <NavLink to="/SignIn" className="icon-[solar--user-circle-outline] text-xl text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-300" />
              </li>
            ) : (
              <li className='flex cursor-pointer overflow-hidden items-center text-sm group text-gray-600 hover:text-gray-900 transition-all duration-300' ref={dropDown}>
                <img onClick={()=>setShow(prev=>!prev)} src={img} alt="profilePic" className='w-10 h-10 rounded-full object-cover object-center' />
                {show&&(<div onClick={logOut} className='flex items-center gap-1.5 shadow-[0px_2px_2px] z-10 absolute px-3 py-2 top-15 left-9/14 rounded-md bg-amber-50 hover:bg-gray-300'>
                  <h1 className='icon-[hugeicons--logout-04] group-hover:text-red-600' />
                  <p>logout</p>
                </div>)}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'
import { memo } from 'react';
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useScroll } from '../context/ScrollContext';


function Header() {
  const { isScrolled } = useScroll();

  return (
    <header className={`flex z-50 py-4 justify-between items-center px-32 text-center text-lg font-semibold text-gray-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 bg-white shadow-lg rounded-b-3xl mx-4' 
        : 'relative'
    }`}>
      <Link to={'/'} className='flex items-center'>
        <motion.img 
            src={Logo} 
            alt="Logo" 
            width={60} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 , ease: "easeIn" }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 , ease: "easeIn" }}
          className="font-['Great_Vibes'] pt-1.5 text-2xl text-[#ED573E]">DuBuy</motion.h1>
      </Link>
      <nav className='flex gap-8 items-center mt-4'>
        <HashLink to={'#Home'} className='group relative'>
          <button className={`group-hover:-translate-y-1.5 transition-all duration-300 ${
            isScrolled 
              ? 'group-hover:text-[#ED573E]' 
              : 'group-hover:text-[#ED573E] max-lg:group-hover:text-white'
          }`}>
            Home
          </button>
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            isScrolled ? 'bg-[#ED573E]' : 'bg-[#ED573E] max-lg:bg-white'
          }`}></div>
        </HashLink>

        <HashLink to={'#About'} className='group relative'>
          <button className={`group-hover:-translate-y-1.5 transition-all duration-300 ${
            isScrolled 
              ? 'group-hover:text-[#ED573E]' 
              : 'group-hover:text-[#ED573E] max-lg:group-hover:text-white'
          }`}>
            About
          </button>
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            isScrolled ? 'bg-[#ED573E]' : 'bg-[#ED573E] max-lg:bg-white'
          }`}></div>
        </HashLink>

        <HashLink to={'#Testamonial'} className='group relative'>
          <button className={`group-hover:-translate-y-1.5 transition-all duration-300 ${
            isScrolled 
              ? 'group-hover:text-[#ED573E]' 
              : 'group-hover:text-white'
          }`}>
            Testamonials
          </button>
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            isScrolled ? 'bg-[#ED573E]' : 'bg-white'
          }`}></div>
        </HashLink>

        <HashLink to={'#Footer'} className='group relative'>
          <button className={`group-hover:-translate-y-1.5 transition-all duration-300 ${
            isScrolled 
              ? 'group-hover:text-[#ED573E]' 
              : 'group-hover:text-white'
          }`}>
            Contact
          </button>
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            isScrolled ? 'bg-[#ED573E]' : 'bg-white'
          }`}></div>
        </HashLink>

        <Link to={'cart'} className='items-center flex'>
          <h1 className={`icon-[mdi--cart-outline] text-[22px] transition-all duration-300 ${
            isScrolled 
              ? 'hover:text-[#ED573E]' 
              : 'hover:text-white'
          }`}/>
        </Link>
        
        <Link to={'buy'} className={`px-4 py-2 rounded-full transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#ED573E] text-white hover:bg-white hover:text-[#ED573E] hover:shadow-[0px_0px_20px] hover:ring-2' 
            : 'bg-white hover:bg-[#ED573E] hover:shadow-[0px_0px_20px] hover:text-white hover:ring-2'
        }`}>
          Order Now
        </Link>
      </nav>
    </header>
  );
}

export default memo(Header);

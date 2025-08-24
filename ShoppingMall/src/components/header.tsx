import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'
import { memo } from 'react';
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="flex z-50 pt-4 justify-between items-center px-32 text-center text-lg font-semibold text-gray-800 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
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
          <button className='group-hover:text-[#ED573E] max-lg:group-hover:text-white group-hover:-translate-y-1.5 transition-all duration-300'>
            Home
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] max-lg:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </HashLink>

        <HashLink to={'#About'} className='group relative'>
          <button className='group-hover:text-[#ED573E] max-lg:group-hover:text-white group-hover:-translate-y-1.5 transition-all duration-300'>
            About
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] max-lg:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </HashLink>

        <HashLink to={'#Testamonial'} className='group relative'>
          <button className='group-hover:text-white group-hover:-translate-y-1.5 transition-all duration-300'>
            Testamonials
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </HashLink>

        <HashLink to={'#Footer'} className='group relative'>
          <button className='group-hover:text-white group-hover:-translate-y-1.5 transition-all duration-300'>
            Contact
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </HashLink>

        <button className='items-center flex'>
          <h1 className='icon-[mdi--cart-outline] text-[22px] hover:text-white'/>
        </button>
        
        <button className='bg-white px-4 py-2 rounded-full hover:bg-[#ED573E] hover:shadow-[0px_0px_20px] hover:text-white hover:ring-2 transition-all duration-700 ease-in-out'>
          Order Now
        </button>
      </nav>
    </header>
  );
}

export default memo(Header);

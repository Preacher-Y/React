import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'
import Words from '../assets/android-chrome-512x512.png'

function Header() {
  return (
    <header className="flex justify-between items-center px-32 text-center text-lg font-semibold text-gray-800">
      <div className='flex items-center'>
        <motion.img 
            src={Logo} 
            alt="Logo" 
            width={60} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 , ease: "easeIn" }}
        />
        <motion.img 
            src={Words} 
            alt="words" 
            width={90} 
            className='-mb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.17 , ease: "easeIn" }}
        />
      </div>
      <nav className='flex gap-6 items-center mt-4'>
        <div className='group relative'>
          <button className='group-hover:text-[#ED573E] group-hover:-translate-y-1.5 transition-all duration-300'>
            Home
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </div>

        <div className='group relative'>
          <button className='group-hover:text-[#ED573E] group-hover:-translate-y-1.5 transition-all duration-300'>
            About
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </div>

        <div className='group relative'>
          <button className='group-hover:text-[#ED573E] group-hover:-translate-y-1.5 transition-all duration-300'>
            Testimonials
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </div>

        <div className='group relative'>
          <button className='group-hover:text-[#ED573E] group-hover:-translate-y-1.5 transition-all duration-300'>
            Contact
          </button>
          <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#ED573E] opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
        </div>

        <button className='items-center flex'>
          <h1 className='icon-[mdi--cart-outline] text-[22px] hover:text-[#ED573E]'/>
        </button>
        
        <button className='bg-white px-4 py-2 rounded-full hover:bg-white/70 transition-colors duration-300'>
          Booking Now
        </button>
      </nav>
    </header>
  );
}

export default Header;

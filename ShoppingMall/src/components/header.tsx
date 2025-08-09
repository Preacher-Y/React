import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'
import Words from '../assets/android-chrome-512x512.png'

function Header() {
  return (
    <header className="flex justify-between items-center dark:bg-[#26272a] bg-orange-50 px-32 text-center text-lg font-semibold text-gray-800">
      <div className='flex items-center'>
        <motion.img 
            src={Logo} 
            alt="words" 
            width={60} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.55 , ease: "easeIn" }}
        />
        <motion.img 
            src={Words} 
            alt="words" 
            width={90} 
            className='-mb-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 , ease: "easeIn" }}
        />
      </div>
      <div className='flex gap-6 items-center mt-4'>
        <button>
          Home
        </button>
        <button>
          About
        </button>
        <button>
          Testimonials
        </button>
        <button>
          Contact
        </button>
        <button>
          <h1 className='icon-[mdi--cart-outline]'></h1>
        </button>
        <button>
          Booking Now
        </button>
      </div>
    </header>
  );
}

export default Header;

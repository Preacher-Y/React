import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'
import Words from '../assets/android-chrome-512x512.png'

export default function Landing() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-orange-100 dark:bg-[#26272a] text-[#ED573E] dark:text-gray-100'>
            <motion.img 
                src={Logo} 
                alt="logo" 
                width={320} 
                className='-mt-10'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
            />
            <motion.img 
                src={Words} 
                alt="words" 
                width={170} 
                className='-mt-24 mr-3'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.h1 
                className="text-4xl font-bold text-center -mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                {Array.from("Welcome to ShoppingMall").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: 1.2 + index * 0.05
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.p 
                className="text-center mt-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
            >
                Your one-stop shop for everything you need!
            </motion.p>
        </div>
    );
}
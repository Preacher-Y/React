import { motion } from 'framer-motion';
import Logo from '../assets/android-app-top-banner.png'

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
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 , ease: "easeIn" }}
                className="font-['Great_Vibes'] -mt-8 mb-20 text-5xl  text-[#ED573E]">DuBuy</motion.h1>
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
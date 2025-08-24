import FirstFig from '../assets/first-figure.svg'
import FirstPlate from '../assets/first plate.png';
import { motion } from 'framer-motion';
import { memo } from 'react';

function Hero() {

    return (
        <section id='Home'
            className='relative flex flex-col lg:flex-row items-center justify-between w-full min-h-[calc(100vh-80px)] px-4 md:px-8 lg:px-32 py-20 lg:py-0'
        >

            <motion.div 
                className="flex flex-col items-center lg:items-start justify-center max-w-xl text-center lg:text-left z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h1 className="text-4xl md:text-5xl md:-mt-6 text-gray-800 font-bold mb-6 md:mb-4 leading-tight">
                    Your Favourite Food
                    <br /> 
                    Delivered Hot & Fresh
                </h1>
                <p className="text-base md:text-lg lg:text-gray-600 md:text-gray-100 mb-8 max-w-md px-4 lg:px-0">
                    Healthy switcher chefs do all the prep work, like marinating, chopping
                    & Even "<span className='italic'>Singing</span>", so you can eat some fresh food.
                </p>
                <button className="bg-[#ED573E] md:bg-orange-50 md:text-[#ED573E] md:hover:text-white md:hover:ring-2 lg:ring-2 flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#ED573E]/90 transition-all duration-700 ease-in-out text-base md:text-lg">
                    Order Now 
                    <span className='icon-[material-symbols--arrow-right-alt] mt-0.5 text-xl md:text-2xl'/>
                </button>
            </motion.div>

            <motion.div 
                className='absolute lg:relative top-0 md:-top-6 right-0 md:-right-2 w-full lg:w-[55%] h-full opacity-10 lg:opacity-100'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="relative w-full h-full">
                    <img 
                        src={FirstFig} 
                        alt="Background Shape" 
                        className="absolute -top-40 -right-14 w-full scale-75 md:scale-88 lg:scale-120 lg:-top-102 lg:-right-24 -z-40" 
                    />
                    <motion.img
                        src={FirstPlate}
                        alt="Food Plate"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -z-40 -translate-y-1/2 w-[90%] md:w-[80%] lg:scale-150"
                    />
                </div>
            </motion.div>
        </section>
    )
}
export default memo(Hero);
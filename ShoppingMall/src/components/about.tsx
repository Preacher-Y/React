import { memo, useRef } from "react";
import AboutShape from '../assets/About.svg';
import SecondPlate from '../assets/second plate.png';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} className="relative flex flex-col lg:flex-row-reverse items-center justify-between w-full min-h-screen px-4 md:px-8 lg:px-32 py-20 lg:py-32">

            <motion.div 
                className="flex flex-col items-center lg:items-start justify-center max-w-xl text-center lg:text-left z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.span 
                    className="text-[#ED573E] font-semibold text-lg mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    About
                </motion.span>
                <motion.h2 
                    className="text-3xl md:text-4xl text-gray-800 font-bold mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Food Is An Important Part Of A Balanced Diet
                </motion.h2>
                <motion.p 
                    className="text-base md:text-lg text-gray-600 mb-8 max-w-md px-4 lg:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Food is any substance consumed to provide nutritional support for an organism. It is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.
                </motion.p>
                <motion.p 
                    className="text-base md:text-lg text-gray-600 mb-8 max-w-md px-4 lg:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Eat healthy, stay healthy. Our chefs are dedicated to providing you with the freshest ingredients and the most delicious meals. Whether you're looking for a quick snack or a full-course meal, we've got you covered.
                </motion.p>
                <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <button className="bg-[#ED573E] hover:bg-white hover:text-[#ED573E] hover:shadow-[0px_0px_25px] hover:ring-[#ED573E] hover:ring-2 flex items-center gap-2 text-white px-6 md:px-8 py-3 md:py-4 rounded-full  transition-all duration-500 text-base md:text-lg">
                        Learn More
                    </button>
                    <button className="flex items-center gap-2 text-gray-800 group px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 text-base md:text-lg">
                        <span className="icon-[material-symbols--play-circle] text-4xl text-[#ED573E]" />
                        Watch Video
                    </button>
                </motion.div>
            </motion.div>

            <motion.div 
                className="absolute lg:relative top-0 right-0 w-full lg:w-[55%] h-full opacity-10 lg:opacity-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="relative w-full h-full">
                    <img 
                        src={AboutShape} 
                        alt="Background Shape" 
                        className="absolute -top-170 -left-64 w-full scale-75 md:scale-60 -z-10" 
                    />
                    <motion.img
                        src={SecondPlate}
                        alt="Food Plate"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[100%] md:scale-115"
                        style={{ rotate }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default memo(About);
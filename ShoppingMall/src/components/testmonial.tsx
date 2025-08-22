import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Testimonial(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <section>
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-[#ED573E] text-lg font-semibold mb-6'>
                            Work
                    </motion.h1>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }} 
                        className='text-6xl text-gray-800/95 font-extrabold mb-6 pl-2'>
                            How It Works
                    </motion.h1>
                    <motion.p  
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='md:px-49 pl-2 text-gray-600 font-medium text-xl'>
                            Pick Food from your menu, Order your Choice and We shall deliver in "No time" in your school cantine or at your doorstep.
                            <br/>And then 'Enjoy' thy food for thee
                    </motion.p>
                </motion.div>
        </section>
    )
}

export default Testimonial
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Testimonial(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <section ref={ref} className='px-32 py-20 mb-10'>
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-center max-w-3xl mx-auto'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-[#ED573E] text-lg font-semibold mb-6'>
                            Testimonial
                    </motion.h1>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }} 
                        className='text-6xl text-gray-800/95 font-extrabold mb-6 pl-2'>
                            What They Are Saying
                    </motion.h1>
                    <motion.p  
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='px-24 text-gray-600 font-medium text-xl'>
                            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </motion.p>
                </motion.div>
                
        </section>
    )
}

export default Testimonial
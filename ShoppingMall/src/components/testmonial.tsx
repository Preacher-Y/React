import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Testimonial(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <section ref={ref} className='px-32 py-20 mb-10 text-center'>
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='max-w-3xl mx-auto'>
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
                        className='text-5xl text-gray-800/95 font-extrabold mb-6 pl-2'>
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='grid gap-6 max-w-3xl mx-auto place-items-center mt-20 text-center'>

                <motion.img
                    src={`https://res.cloudinary.com/dn85kcomj/image/upload/v1755889564/person_q5gsrq.jpg`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='w-20 h-20 object-center object-cover rounded-full'/>
                
                <motion.p  
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='px-24 text-gray-600 font-medium text-xl'>
                            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </motion.p>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='text-xl font-semibold'>
                        John Doe
                </motion.h1>

            </motion.div>

        </section>
    )
}

export default Testimonial
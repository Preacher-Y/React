import { memo,useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function How() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <>
            <section ref={ref} className='px-32 py-20 mt-10'>
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
                        className='text-4xl text-gray-800/95 font-extrabold mb-6 pl-2'>
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
                <motion.div className=' flex items-center text-center gap-4 justify-between mt-16'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className='w-[80%] h-[400px] bg-orange-50 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 '>
                        <h1 className='icon-[emojione-monotone--fork-and-knife] text-7xl text-[#ED573E]/95 mt-10 mb-12'/>
                        <h1 className='text-3xl font-bold text-gray-800/90 mb-12'>Pick Meals</h1>
                        <p className='text-gray-700 px-16'>Choose your favorite meal from our diverse menu options. Each meal is prepared with fresh ingredients.</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className='w-[80%] h-[400px] bg-orange-50 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 '>
                        <h1 className='icon-[bx--bxs-hand-up] text-7xl text-[#ED573E]/95 mt-10 mb-12'/>
                        <h1 className='text-3xl font-bold text-gray-800/90 mb-12'>Choose How Often</h1>
                        <p className='text-gray-700 px-16'>Choose how often you want your food delivered to you. Daily, Weekly, Monthly? It's up to you!</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className='w-[80%] h-[400px] bg-orange-50 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow duration-300 '>
                        <h1 className='icon-[mdi--truck-fast] text-7xl text-[#ED573E]/95 mt-10 mb-12'/>
                        <h1 className='text-3xl font-bold text-gray-800/90 mb-12'>Fast Deliveries</h1>
                        <p className='text-gray-700 px-16'>Fast Delivery to your home, hostels and School cantine</p>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )    
}
export default memo(How);
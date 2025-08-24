import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Footer(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <section ref={ref} className='px-32 py-20 mb-30 text-gray-600/80'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex justify-center items-center'>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }} 
                            className="font-['Great_Vibes']">DuBuy</motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <motion.h1 className='icon-[lineicons--x]'/>
                            <motion.h1 className='icon-[line-md--instagram]'/>
                            <motion.h1 className='icon-[mdi--youtube]'/>
                            <motion.h1 className='icon-[ci--facebook]'/>
                        </motion.div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Footer
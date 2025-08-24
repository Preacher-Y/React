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
                className='flex items-center justify-between'>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='grid gap-12 text-4xl'>
                    
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }} 
                            className="font-['Great_Vibes'] font-bold text-gray-700">DuBuy</motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='flex gap-6 text-5xl'>
                            <motion.h1 className='icon-[lineicons--x]'/>
                            <motion.h1 className='icon-[line-md--instagram]'/>
                            <motion.h1 className='icon-[mdi--youtube] text-6xl -mt-1'/>
                            <motion.h1 className='icon-[ci--facebook]'/>
                        </motion.div>
                </motion.div>
                <motion.div className='flex font-semibold gap-10 text-lg'>
                    <motion.div>
                        <motion.h1>Quality</motion.h1>
                        <motion.h1>Help</motion.h1>
                        <motion.h1>Share</motion.h1>
                        <motion.h1>Carrers</motion.h1>
                        <motion.h1>Work</motion.h1>
                        <motion.h1>Testamonials</motion.h1>
                    </motion.div>
                    <motion.div>
                        <motion.h1>244-5333-7783</motion.h1>
                        <motion.h1>hello@food.com</motion.h1>
                        <motion.h1>press@food.com</motion.h1>
                        <motion.h1>contact@food.com</motion.h1>
                    </motion.div>
                    <motion.div>
                        <motion.h1>Terms & Conditions</motion.h1>
                        <motion.h1>Privacy Policy</motion.h1>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Footer
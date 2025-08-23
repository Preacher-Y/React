import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function ReachOut(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });
    return(
        <section className="px-32 py-20 mb-10 text-center" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='max-w-3xl mx-auto'>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }} 
                    className='text-4xl text-gray-800/95 font-extrabold mb-6 px-32'>
                        Have Question In Mind? Let Us Help You
                </motion.h1>

                <motion.div className='flex max-w-2xl gap-4 mt-28 mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>

                    <motion.input
                        initial={{opacity:0,scale:0.6}}
                        animate = {isInView? {opacity:1,scale:1}:{opacity:0,scale:0.6}}
                        transition={{duration:0.5, delay:0.4}}
                        type='text' placeholder='yourmail@gmail.com' className='py-3 px-4 outline-none focus:border-b-2 text-lg ml-10 w-[96%]'/>
                    <motion.button
                        initial={{opacity:0,scale:0.6}}
                        animate = {isInView? {opacity:1,scale:1}:{opacity:0,scale:0.6}}
                        transition={{duration:0.5, delay:0.4}}
                        className='bg-[#ED573E] text-white font-semibold px-12 py-2 rounded-full text-sm'>
                        Submit
                    </motion.button>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default ReachOut
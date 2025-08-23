import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Footer(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return(
        <section className='px-32 py-20 mb-10'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                    
                <motion.div>
    
                </motion.div>

            </motion.div>
        </section>
    )
}

export default Footer
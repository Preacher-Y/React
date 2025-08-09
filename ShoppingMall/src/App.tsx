import Header from './components/header';
import Hero from './components/hero';
import Landing from './pages/landing';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

function App() {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 4700);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!isDisplayed ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Landing />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='relative w-full h-screen overflow-x-hidden'>
            <Header />
            <Hero/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

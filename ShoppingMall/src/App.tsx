import Landing from './pages/landing';
import Home from './pages/home';
import Layout from './components/Layout';
import Cart from './pages/cart';
import Products from './pages/products';
import Buy from './pages/buy';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { makeServer } from './mirage/server';

function App() {
  const [isDisplayed, setIsDisplayed] = React.useState(()=>localStorage.getItem('isDisplayed')==='true');

  React.useEffect(() => {
    makeServer();
    
    setTimeout(() => {
      if(localStorage.getItem('isDiplayed')!=='true'){
        setIsDisplayed(true);
        localStorage.setItem('isDisplayed','true')
      }
    }, 4700);
  }, []);

  const HomeAndLanding = !isDisplayed ? (
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
          <Home/>
        </motion.div>
      )

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<AnimatePresence mode="wait">{ HomeAndLanding }</AnimatePresence>}/>
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} />
      <Route path="buy" element={<Buy />} />
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

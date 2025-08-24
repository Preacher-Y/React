import Landing from './pages/landing';
import Home from './pages/home';

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';

function App() {
  const [isDisplayed, setIsDisplayed] = React.useState(()=>localStorage.getItem('isDisplayed')==='true');

  React.useEffect(() => {
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
    <Route path="/" element={<Outlet/>}>
      <Route index element={<AnimatePresence mode="wait">{ HomeAndLanding }</AnimatePresence>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

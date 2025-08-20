import Home from './pages/home';
import Error from './pages/404Error';
import Vans from './pages/Vans/vans';
import VansHost from './pages/Hosts/vans';
import About from './pages/about';
import DetailsVan from './pages/Vans/detailsVan';
import Dashboard from './pages/Hosts/dashboard';
import Reviews from './pages/Hosts/reviews';
import Income from './pages/Hosts/income';
import HostVanDetails from './pages/Hosts/vans/hostVanDetails';
import Details from './pages/Hosts/vans/details';
import Pricing from './pages/Hosts/vans/pricing';
import Pic from './pages/Hosts/vans/pic';
import Login from './pages/login';
import SignUp from './pages/signUp';

import type { VanType } from './type';
import { FetchError } from './type'; 

import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import "./server"
import LayoutHeader from './components/LayoutHeader';
import LayoutHost from './components/LayoutHost';
import FetchErrors from './components/Error'
import React, { useState } from 'react';


const Loader = async () => {
  try {
    const response = await fetch('/api/vans');
    if (!response.ok) {
      throw new FetchError(
        "Failed to fetch the Vans. Try Refreshing or call the management",
        response.status,
        response.statusText
      );
    }
    const json = await response.json();
    return json.vans as VanType || [];
  } catch {
    throw new FetchError(
      "Failed to fetch the Vans. Try Refreshing or call the management",
      500,
      "Network Error"
    );
  }
};



function App() {
  
  const [isLoggedIn,setIsLoggedIn] = useState(false) 
  
  function ProtectedRoute({ children }:{children:React.JSX.Element}) {
    if (!isLoggedIn) {
      
      return <Navigate to="/SignIn" state={{ message: "You must first Login " }} replace />
    }
    return children;
  }

    const router = createBrowserRouter(createRoutesFromElements(

        <Route path="/" element={<LayoutHeader/>} errorElement={<FetchErrors/>}>
            <Route path='*' element={<Error/>}/>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />}loader={Loader} />
            <Route path="vans/:name" element={<DetailsVan/>} loader={Loader} />
            <Route path="SignIn" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
              
            <Route path="host" element={<ProtectedRoute><LayoutHost/></ProtectedRoute>}>
              <Route index element={<Dashboard/>} loader={Loader}/>
              <Route path="reviews" element={<Reviews/>} />
              <Route path="income" element={<Income/>} />
              <Route path="vans" element={<VansHost/>} loader={Loader} />

              <Route path="vans/:name" element={<HostVanDetails/>} loader={Loader}>
                <Route index element={<Details/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="photos" element={<Pic/>}/>
              </Route>
          </Route>
        </Route>
      
    ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

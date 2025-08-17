import Home from './pages/home';
import Error from './pages/404Error';
import Vans from './pages/Vans/vans';
import VansHost from './pages/Hosts/vans';
import About from './pages/about';
import DetailsVan from './pages/Vans/detailsVan';
import Dashboard from './pages/Hosts/dashboard';
import Reviews from './pages/Hosts/reviews';
import Income from './pages/Hosts/income';

import type { VanType } from './type';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./server"
import LayoutHeader from './components/LayoutHeader';
import LayoutHost from './components/LayoutHost';
import HostVanDetails from './pages/Hosts/vans/hostVanDetails';
import Details from './pages/Hosts/vans/details';
import Pricing from './pages/Hosts/vans/pricing';
import Pic from './pages/Hosts/vans/pic';
import Login from './pages/login';
import SignUp from './pages/signUp';


function App() {
  const [data, setData]=useState<VanType>(()=>{
    const cached = localStorage.getItem("VansData");
    return cached ? (JSON.parse(cached)as VanType):[]
  })

  useEffect(()=>{
        if(data.length>0) return;

        const abort = new AbortController();
        (async () => {
            try {
                const response = await fetch('/api/vans',{signal:abort.signal})
                const json = (await response.json()) as {vans:VanType}
                setData(json.vans)
                localStorage.setItem("VansData",JSON.stringify(json.vans))
                
            } catch (error) {
                console.log(error);   
            }

        })()
        return ()=>abort.abort()
    },[data.length])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHeader/>}>
            <Route path='*' element={<Error/>}/>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans data={data}/>} />
            <Route path="vans/:name" element={<DetailsVan data={data}/>} />
            <Route path="SignIn" element={<Login/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
            
            <Route path="host" element={<LayoutHost/>} >
              <Route index element={<Dashboard data={data}/>}/>
              <Route path="reviews" element={<Reviews/>} />
              <Route path="income" element={<Income/>} />
              <Route path="vans" element={<VansHost data={data}/>} />

              <Route path="vans/:name" element={<HostVanDetails data={data}/>}>
                <Route index element={<Details/>}/>
                <Route path="pricing" element={<Pricing/>}/>
                <Route path="Photos" element={<Pic/>}/>
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

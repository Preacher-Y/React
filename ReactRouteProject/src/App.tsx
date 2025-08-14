import Home from './pages/home';
import Vans from './pages/Vans/vans';
import About from './pages/about';
import DetailsVan from './pages/Vans/detailsVan';
import Dashboard from './pages/Hosts/dashboard';
import Reviews from './pages/Hosts/reviews';
import Income from './pages/Hosts/income';

import type { VanType } from './type';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "./server"
import LayoutHeader from './components/LayoutHeader';
import LayoutHost from './components/LayoutHost';


function App() {
  const [data, setData]=useState<VanType>(()=>{
    const cached = localStorage.getItem("VansData");
    return cached ? (JSON.parse(cached)as VanType):[]
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHeader/>}>

            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans data={data} setData={setData}/>} />
            <Route path="vans/:name" element={<DetailsVan data={data}/>} />
            
            <Route path="host" element={<LayoutHost/>} >
              <Route index element={<Dashboard data={data}/>}/>
              <Route path="reviews" element={<Reviews/>} />
              <Route path="income" element={<Income/>} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

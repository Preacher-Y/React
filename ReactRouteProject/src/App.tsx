import Home from './pages/home';
import Vans from './pages/vans';
import About from './pages/about';
import DetailsVan from './pages/detailsVan';

import type { VanType } from './type';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "./server"
import Layout from './components/Layout';


function App() {
  const [data, setData]=useState<VanType>([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans data={data} setData={setData}/>} />
            <Route path="/vans/:name" element={<DetailsVan data={data}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

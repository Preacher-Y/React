import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';

import type { VanType } from './type';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "./server"
import Vans from './pages/vans';
import DetailsVan from './pages/detailsVan';


function App() {
  const [data, setData]=useState<VanType>([])

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans data={data} setData={setData}/>} />
          <Route path="/vans/:name" element={<DetailsVan data={data}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

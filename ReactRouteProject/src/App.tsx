import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./server"
import Vans from './pages/vans';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

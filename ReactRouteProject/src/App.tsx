import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

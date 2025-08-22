import About from '../components/about';
import Header from '../components/header';
import Hero from '../components/hero';
import How from '../components/how';

import {memo} from 'react';
import Testimonial from '../components/testmonial';

function Home(){
    return(
        <>
            <div className="relative w-full h-screen overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <Header />
                <Hero/>
                <About/>
                <How/>
                <Testimonial/>
            </div>
        </>
    )
}
export default memo(Home);
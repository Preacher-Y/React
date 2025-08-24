import About from '../components/about';
import Footer from '../components/footer';
import Hero from '../components/hero';
import How from '../components/how';
import ReachOut from '../components/reachout';

import Testimonial from '../components/testmonial';

function Home(){
    return(
        <>
            <Hero/>
            <About/>
            <How/>
            <Testimonial/>
            <ReachOut/>
            <Footer/>
        </>
    )
}
export default Home;
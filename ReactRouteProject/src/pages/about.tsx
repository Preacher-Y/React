import { memo } from "react"
import AboutPic from '../assets/about-hero.png'
import { Link } from "react-router-dom";

function About(){
    return(
        <div id="about" className="flex flex-col max-sm:h-[81.65vh] md:h-[87.8vh] lg:h-full  items-center mb-6 gap-6">
            <img src={AboutPic} alt="About Us" />
            <div className="flex flex-col h-full items-center gap-4 px-6">
                <div className="flex flex-col justify-center gap-4 items-center ">
                    <h1 className="text-2xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="text-sm text-gray-700">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                    <p className="text-sm text-gray-700">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                <div className="flex flex-col w-full px-6 py-4 rounded-md bg-orange-300">
                    <h2 className="text-lg font-bold">Your destination is waiting.</h2>
                    <p className="text-lg font-bold">Your van is ready.</p>
                    <Link to="/vans" className="bg-black text-center font-semibold text-white px-2 py-2 rounded-lg mt-6 w-[50%]">
                       Explore our vans
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(About);
import { memo } from "react"
import AboutPic from '../assets/about-hero.png'

function About(){
    return(
        <div id="about">
            <img src={AboutPic} alt="About Us" />
            <div className="flex flex-col justify-center items-center px-6 ">
                <h1 className="text-3xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
        </div>
    )
}

export default memo(About);
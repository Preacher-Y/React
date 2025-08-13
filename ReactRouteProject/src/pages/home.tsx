import { memo } from "react";
import BgHero from "../assets/home-hero.png" 
import { Link } from "react-router-dom";

function Home(){
    return(

        <div
            style={{ backgroundImage: `url(${BgHero})` }}
            className="bg-cover bg-center h-screen flex flex-col items-center gap-6 justify-center px-6"
        >
            <h1 className="text-3xl text-white font-bold">You got the travel plans, we got the travel vans.</h1>
            <p className="text-gray-200 font-medium ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link
                to="/vans"
                className="bg-[#FF8C38] py-3 w-full text-lg text-white font-semibold tracking-wider block text-center"
            >Find your van</Link>
        </div>

    )
}
export default memo(Home)
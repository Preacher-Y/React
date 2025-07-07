import { IoLocationSharp } from "react-icons/io5";
import Data from "../data";

export default function Body() {
    return (
        <div className="max-w-4xl mx-auto p-4 mt-9">
            {Data.map(el => (
                <div className="bg-white flex flex-col md:flex-row md:space-x-5 shadow-md rounded-lg p-4 mb-4 space-y-4 md:space-y-0">
                    <img src={el.img.src} alt={el.img.alt} className="w-full md:w-42 h-60 md:h-auto object-cover rounded-lg"/>
                    <div className="flex-1 flex flex-col justify-center mb-2">
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0">
                            <div className="flex items-center space-x-1">
                                <IoLocationSharp className="h-14 text-[#F55A5A]" />
                                <h2 className="text-sm font-medium text-gray-700 uppercase tracking-[4px]">{el.country}</h2>
                            </div>
                            <a href={el.googleMapsLink} target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-gray-700">
                                View on Google Maps
                            </a>
                        </div>
                        <h1 className="font-bold text-2xl md:text-[38px] mb-4 md:mb-6">{el.title}</h1>
                        <p className="text-gray-800 mb-2 md:mb-4 font-bold">{el.dates}</p>
                        <p className="text-gray-700 mb-2 md:mb-4">{el.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
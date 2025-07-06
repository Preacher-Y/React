import { LucideLocationEdit } from "lucide-react";
import Data from "../data";

export default function Body() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            {Data.map(el => (
                <div className="bg-white space-x-5 flex shadow-md rounded-lg p-4 mb-4" key={el.id}>
                    <img src={el.img.src} alt={el.img.alt} className="w-42   h-48 object-cover rounded-t-lg" />
                    <div className=" items-center mb-2">
                        <div className="flex items-center mb-2">
                            <div className="flex content-center space-x-2 mb-2">
                                <LucideLocationEdit className="text-[#F55A5A]"/>
                                <h2 className="text-xl font-light uppercase leading-6 tracking-widest ">{el.country}</h2>
                            </div>
                            <a href={el.googleMapsLink} target="_blank" rel="noopener noreferrer" className="ml-auto underline text-gray-500 hover:underline">View on Google Maps</a>
                        </div>
                        <h1>{el.title}</h1>
                        <p className="text-gray-700 mb-4">{el.text}</p>
                        <p className="text-gray-500">{el.dates}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
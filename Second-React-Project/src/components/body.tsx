import { LucideLocationEdit } from "lucide-react";
import Data from "../data";

export default function Body() {
    return (
        <div className="max-w-4xl mx-auto p-4 mt-9">
            {Data.map(el => (
                <div className="bg-white space-x-5 flex shadow-md rounded-lg p-4 mb-4" key={el.id}>
                    <img src={el.img.src} alt={el.img.alt} className="w-42   h-auto  object-cover rounded-lg" />
                    <div className=" items-center mb-2">
                        <div className="flex items-end space-x-5">
                            <div className="flex items-center space-x-2">
                                <LucideLocationEdit className=" h-5 text-[#F55A5A]"/>
                                <h2 className="text-sm font-medium text-gray-700 uppercase tracking-[4px] ">{el.country}</h2>
                            </div>
                            <a href={el.googleMapsLink} target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-gray-700">View on Google Maps</a>
                        </div>
                        <h1 className="font-bold text-[38px] mb-6">{el.title}</h1>
                        <p className="text-gray-800 mb-4 font-bold">{el.dates}</p>
                        <p className="text-gray-700 mb-4">{el.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
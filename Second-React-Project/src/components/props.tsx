import { IoLocationSharp } from "react-icons/io5";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import type { CardProps } from "../types";

/* 
  Also the Destructuring can also be done in the function parameters
  {img, country, googleMapsLink, title, dates, text} : CardProps -> as the parameter
*/
export default function Card(props:CardProps) {
  return (
    <div className="bg-white flex flex-col md:flex-row md:space-x-5 shadow-md rounded-lg p-4 mb-4 space-y-4 md:space-y-0">
      <img src={props.img.src} alt={props.img.alt} className="w-full md:w-52 h-60 md:h-auto object-cover rounded-lg"/>
      <div className="flex-1 flex flex-col justify-center mb-2">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-1">
            <IoLocationSharp className=" text-[#F55A5A]" size={22} />
            <h2 className="text-sm font-medium text-gray-700 uppercase tracking-[4px]">{props.country}</h2>
          </div>
          <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer" className="underline text-gray-500 hover:text-gray-700">
            View on Google Maps
          </a>
        </div>
        <h1 className="font-bold text-2xl md:text-[38px] mb-4 md:mb-6">{props.title}</h1>
        <p className="text-gray-800 mb-2 md:mb-4 font-bold">{props.dates}</p>
        <p className="text-gray-700 mb-2 md:mb-4">{props.text}</p>
        <div className="flex space-x-4 justify-end content-center mt-4">
          <div className="flex items-center">
            <FaThumbsUp onClick={vote} id="up" className="inline-block text-[#1cfa8f] mr-1" size={24} />
            <span>0</span>
          </div>
          <div className="flex items-center">
            <FaThumbsDown onClick={vote} id="down" className="inline-block text-[#cc3d3d] mr-1 mt-3" size={24} />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function vote(e: React.MouseEvent<SVGElement, MouseEvent>) {
  const target = e.currentTarget as SVGElement;
  const id = target.id;
  const span = target.nextElementSibling as HTMLSpanElement | null;
  if (span) {
    if (id === "up") {
      span.textContent = (parseInt(span.textContent || "0") + 1).toString();
    } else if (id === "down") {
      span.textContent = (parseInt(span.textContent || "0") + 1).toString();
    }
  }
}
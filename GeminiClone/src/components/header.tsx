import DropdownMenu from "./dropDown";
import Logo from '../assets/gemini_sparkle_aurora_33f86dc0c0257da337c63.svg'
import { memo } from "react";
import { useOpenContext } from "../hooks/openContext";
import { clsx } from "clsx";

function Header() {
  const { isOpen } = useOpenContext();
  return (
    <header className={clsx("py-1 text-xl fixed right-0 transition-all duration-300 top-0 flex items-center justify-between mx-5 font-semibold z-20",
                  {
                    "left-64":isOpen,
                    "left-16": !isOpen
                  })}>
      <div>
        <h1 className="pl-1 text-gray-400">Gemini</h1>
        <DropdownMenu/>
      </div>
      <div className="flex gap-4 items-center">
        <button className="flex text-white gap-1.5 rounded-md text-xs  bg-gray-500/50 hover:bg-gray-500/70 px-6 py-2">
          <img src={Logo} alt="star" className="h-4 w-4"/>
          Upgrade
        </button>
        <div className="w-8 h-8">
          <img src={`https://lh3.googleusercontent.com/ogw/AF2bZyixWkwYyamOyyDmqoA1EdDMCp4UofVVzQqOXHtTdG3qaMA6=s64-c-mo`} alt="" className="rounded-full"/>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);

import { memo, useEffect, useState } from "react";
import clsx from "clsx";
import { useOpenContext } from "../hooks/openContext";
import { useOpen2Context } from "../hooks/open2Context";
import { useSearchContext } from "../hooks/searchContext";
import Threedots from "./threeDots";

function SideBar() {
  const { isOpen, setIsOpen } = useOpenContext();
  const {isSearchClicked,setIsSearchClicked}= useSearchContext();
  const { isOpen2 } = useOpen2Context();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  useEffect(()=>{
    if(isOpen2){
      setIsOpen(false);
    }
  },[isOpen]);

  return (
    <aside
      className={clsx(
        "h-screen bg-[#282A2C] flex fixed top-0 z-20 flex-col justify-between transition-all ease-in-out duration-300",
        isOpen ? "w-64" : "w-18"
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <nav className="h-full flex flex-col justify-between">
        <div className="flex flex-col">

          <div className="flex items-center justify-between mb-4 p-4 pb-2 transition-all duration-300 text-gray-100">
            <button className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2">
               <span className="icon-[lucide--menu] cursor-pointer"/>
            </button>
            {isOpen && (
              <button className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2" 
                onClick={() => setIsSearchClicked(!isSearchClicked)}
                disabled={isSearchClicked}
              >
                <span className={clsx("icon-[ion--search] cursor-pointer",{"text-gray-400/60":isSearchClicked,"":!isSearchClicked})} />
              </button>
            )}
          </div>

          <div className="text-[#9A9B9C] overflow-hidden px-4 py-2">
            <button className="flex items-center gap-2 font-semibold truncate cursor-pointer transition-all duration-300 ease-in-out rounded-full px-2 py-2">
              <span className="icon-[material-symbols--edit-square-outline-rounded] cursor-pointer transition-all duration-300 ease-in-out text-[21px]" />
              {isOpen && <span className="transition-all duration-1000 ease-in-out text-md truncate">New Chat</span>}
            </button>
          </div>
          
          {isOpen &&(<ul className="text-gray-300/70 px-4 transition-all duration-300 ease-in-out truncate max-h-full overflow-y-auto">
            <h1 className="px-2 pb-3">Recent</h1>
            <li className="text-gray-300 transition-all flex justify-between relative items-center duration-300 ease-in-out truncate "
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-2 px-4 w-full hover:bg-gray-500/20 cursor-pointer rounded-full">
                <span>Clone the Gemini</span>
              </div>
              {hoveredIndex==0 && (<Threedots />)}
            </li>
            <li className="text-gray-300 transition-all flex justify-between relative items-center duration-300 ease-in-out truncate "
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-2 px-4 w-full hover:bg-gray-500/20 cursor-pointer rounded-full">
                <span>Build a React App</span>
              </div>
              {hoveredIndex==1 && (<Threedots />)}
            </li>
            <li className="text-gray-300 transition-all flex justify-between relative items-center duration-300 ease-in-out truncate "
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-2 px-4 w-full hover:bg-gray-500/20 cursor-pointer rounded-full">
                <span>Learn TypeScript</span>
              </div>
              {hoveredIndex==2 && (<Threedots />)}
            </li>
          </ul>)}
        </div>
        
        <button className="text-gray-300 mb-4 mx-2 px-4 py-2 flex items-center gap-2 truncate hover:bg-gray-500/20 cursor-pointer rounded-full">
          <span className="icon-[clarity--settings-solid] cursor-pointer text-[21px]" />
          {isOpen && <span className="truncate">Settings & Help</span>}
        </button>
      </nav>
    </aside>
  );
}

export default memo(SideBar);

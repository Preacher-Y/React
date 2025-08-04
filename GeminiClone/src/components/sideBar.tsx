import { memo } from "react";
import clsx from "clsx";
import { useOpenContext } from "../hooks/openContext";
function SideBar() {
  const { isOpen, setIsOpen } = useOpenContext();

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

          <div className="flex items-center justify-between p-4 pb-2 transition-all duration-300 text-gray-100">
            <div className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2">
               <span className="icon-[lucide--menu]"/>
            </div>
            {isOpen && (
              <div className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2">
                <span className="icon-[ion--search]" />
              </div>
            )}
          </div>

          <div className="text-gray-400/60 px-4 py-2">
            <div className="flex items-center gap-2 font-semibold truncate cursor-pointer transition-all duration-300 ease-in-out rounded-full px-2 py-2">
              <h1 className="icon-[material-symbols--edit-square-outline-rounded] transition-all duration-300 ease-in-out text-[21px]" />
              {isOpen && <span className="transition-all duration-1000 ease-in-out text-md truncate">New Chat</span>}
            </div>
          </div>
          
          {isOpen &&(<ul className="text-gray-400/70 px-4 transition-all duration-300 ease-in-out truncate">
            <h1 className="px-2 pb-3">Recent</h1>
            <li className="text-gray-400 px-4 transition-all duration-300 ease-in-out truncate py-2 hover:bg-gray-500/20 cursor-pointer rounded-full">
              Clone the Gemini 
            </li>
          </ul>)}
        </div>
        
        <div className="text-gray-300 mb-4 mx-2 px-4 py-2 flex items-center gap-2 truncate hover:bg-gray-500/20 cursor-pointer rounded-full">
          <h1 className="icon-[clarity--settings-solid] text-[21px]" />
          {isOpen && <span className="truncate">Settings & Help</span>}
        </div>
      </nav>
    </aside>
  );
}

export default memo(SideBar);

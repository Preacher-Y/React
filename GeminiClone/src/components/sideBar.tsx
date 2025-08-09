import { memo, useEffect, useState } from "react";
import Settings from "./settingsComponent";
import { useOpenContext } from "../hooks/openContext";
import { useOpenModelContext } from "../hooks/openModelContext";
import { useSearchContext } from "../hooks/searchContext";
import Threedots from "./threeDots";
import clsx from "clsx";

function SideBar() {
  const { isOpen, setIsOpen } = useOpenContext();
  const { isSearchClicked, setIsSearchClicked } = useSearchContext();
  const { isOpenModel } = useOpenModelContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('aside');
      if (isMenuClicked && sidebar && !sidebar.contains(event.target as Node)) {
        setIsMenuClicked(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuClicked, setIsOpen]);

  useEffect(() => {
    if (isOpenModel) {
      setIsOpen(false);
      setIsMenuClicked(false);
    }
  }, [isOpen, isOpenModel, setIsOpen]);

  const items = [
    { title: "Clone the Gemini", date: "Aug 7" },
    { title: "Build a React App", date: "Jul 29" },
    { title: "Learn TypeScript", date: "Jun 30" },
    { title: "Explore AI Models", date: "May 15" },
    { title: "Understand React Hooks", date: "Apr 20" },
    { title: "Master CSS Grid", date: "Mar 10" },
    { title: "JavaScript ES6 Features", date: "Feb 5" },
    { title: "Node.js Basics", date: "Jan 25" },
    { title: "Express.js Fundamentals", date: "Dec 15" },
    { title: "MongoDB Introduction", date: "Nov 5" },
  ];

  return (
    <aside
      className={clsx(
        "h-screen bg-[#282A2C] flex fixed top-0 z-20 flex-col justify-between transition-all ease-in-out duration-300",
        isOpen ? "w-64" : "w-18"
      )}
      onMouseEnter={() => !isOpenModel && !isMenuClicked && setIsOpen(true)}
      onMouseLeave={() => !isOpenModel && !isMenuClicked && setIsOpen(false)}
    >
      <div className="flex flex-col h-screen truncate">
        <nav className="h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4 p-4 pb-2 transition-all duration-300 text-gray-100">
              <button 
                className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2"
                onClick={() => {
                  setIsMenuClicked(!isMenuClicked);
                  setIsOpen(true);
                }}
              >
                <span className="icon-[lucide--menu] cursor-pointer" />
              </button>
              {isOpen && (
                <button
                  className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2"
                  onClick={() => setIsSearchClicked(!isSearchClicked)}
                  disabled={isSearchClicked}
                >
                  <span
                    className={clsx(
                      "icon-[ion--search] cursor-pointer",
                      {
                        "text-gray-400/60": isSearchClicked,
                        "": !isSearchClicked,
                      }
                    )}
                  />
                </button>
              )}
            </div>

            <a className={clsx("overflow-hidden px-4 py-2 mb-2",{
              "text-[#9A9B9C]": !isSearchClicked,
              "text-gray-200": isSearchClicked,
            })}
              href="/"
            >
              <button className="flex items-center gap-2 font-semibold truncate cursor-pointer transition-all duration-300 ease-in-out rounded-full px-2 py-2"
                disabled={!isSearchClicked}
              >
                <span className="icon-[material-symbols--edit-square-outline-rounded] cursor-pointer transition-all duration-300 ease-in-out text-[21px]" />
                {!isOpenModel && isOpen && (
                  <span className="transition-all duration-1000 ease-in-out text-md truncate">
                    New Chat
                  </span>
                )}
              </button>
            </a>

            {!isOpenModel && isOpen && (
              <ul className="text-gray-300/70 px-4 transition-all duration-300 ease-in-out truncate max-h-[50%] overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:'none']">
                <h1 className="px-2 pb-3">Recent</h1>
                {items.map((item, index) => (
                  <li
                    key={item.title}
                    className={clsx(
                      "flex items-center pt-2 justify-between cursor-pointer transition-all duration-300 ease-in-out relative"
                    )}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center gap-2 px-4 py-2 w-full rounded-full hover:bg-gray-500/20">
                      <span className="truncate max-w-[170px] text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>
                    {hoveredIndex === index && (
                      <div key={index} className="absolute right-2">
                        <Threedots />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Settings />
        </nav>
      </div>
    </aside>
  );
}

export default memo(SideBar);

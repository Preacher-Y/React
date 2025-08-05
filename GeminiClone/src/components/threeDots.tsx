import  { memo, useState } from "react";

function Threedots() {
    const [isClicked,setIsClicked] = useState(false);
  return (
    <>
        <button className="flex text-gray-200 gap-2 text-lg/1 hover:bg-gray-500/20 cursor-pointer rounded-full duration-300 transition-all ease-in-out px-2 py-2"
          onClick={() => setIsClicked(!isClicked)}
        >
            <h1 className="icon-[bi--three-dots-vertical] cursor-pointer" />
        </button>
        {isClicked &&
        (<div className="bg-[#1F1E20] text-gray-400 absolute right-2 top-10 rounded-lg shadow-lg z-50 p-2">
            <div>
                <button className="flex items-center gap-2 hover:bg-gray-500/20 rounded-full px-2 py-1.5 transition-all duration-300 ease-in-out">
                    <span className="icon-[material-symbols--share] cursor-pointer text-gray-200"/>
                    <h1 className="text-gray-200 hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-1.5 transition-all duration-300 ease-in-out">Share</h1>
                </button>
            </div>
        </div>)}
    </>
  );
}
export default memo(Threedots);
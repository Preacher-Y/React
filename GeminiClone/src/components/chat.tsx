import { memo } from "react";
import AddFile from "./addFile"
import { useSearchContext } from "../hooks/searchContext";

function Chat() {
    const {isSearchClicked} = useSearchContext();
    
      if (isSearchClicked) {
        return <></>;
      }
  return (
    <>
        <div className="max-w-3xl mx-auto left-[23.9%] h-[19.7%] w-[59%] fixed bottom-0 ring-[0.3px] ring-[#9A9B9C]  rounded-3xl shadow-lg py-3 px-2 mb-12">
            <div className="grid gap-5 px-1 mb-2">
                <input type="text" placeholder="Ask Gemini" className="placeholder:text-[#9A9B9C] placeholder:text-lg placeholder:tracking-tighter pl-2 mt-0.5 w-full text-gray-200 text-lg outline-none"/>
                <div className=" text-[#9A9B9C] font-bold flex justify-between items-center">
                    <div className="flex items-center gap-1">
                        <AddFile/>
                        <div className="flex items-center text-sm gap-2 cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[hugeicons--global-search] text-lg"/>
                            Deep Research
                        </div>
                        <div className="flex items-center text-sm gap-2 cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[material-symbols--note-stack-add-outline] text-lg"/>
                            Canvas
                        </div>
                        <div className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[material-symbols--photo-prints-outline] text-lg "/>
                            Images
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-xl hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-2">
                        <span className="icon-[material-symbols--mic]"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default memo(Chat);
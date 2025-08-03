export default function Chat() {
  return (
    <>
        <div className="max-w-3xl mx-auto left-[23.2%] h-[20%] w-[57%] fixed bottom-0 border border-gray-500  rounded-3xl shadow-lg py-3 px-2 mb-12">
            <div className="grid gap-6 px-1 mb-2">
                <input type="text" placeholder="Ask Gemini" className="placeholder:text-gray-400 placeholder:text-lg placeholder:tracking-tighter pl-2 mt-0.5 w-full text-gray-200 text-lg outline-none"/>
                <div className=" text-gray-400 font-bold flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div className="hover:bg-gray-500/20 cursor-pointer flex items-center gap-1 rounded-full px-2 py-2">
                            <span className="icon-[line-md--plus] cursor-pointer text-xl"/>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[hugeicons--global-search]"/>
                            Deep Research
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[material-symbols--note-stack-add-outline]"/>
                            Canvas
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-500/20 rounded-full px-2 py-1.5">
                            <span className="icon-[material-symbols--photo-prints-outline]"/>
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
import { memo } from "react";

function SearchPage() {
    return (
        <main className="max-w-xl mx-auto min-h-full mt-20 transition-all duration-300 ease-in-out">
            <h1 className="text-3xl pl-4 text-white">Search</h1>
            <div className="flex items-center gap-4 w-full ring-[0.3px] ring-[#9A9B9C] rounded-full mt-6 py-3 px-4">
                <span className="icon-[ion--search] cursor-pointer text-[#9A9B9C] text-2xl" />
                <input type="text" placeholder="Search for chats" className="outline-none placeholder:text-[#9A9B9C]/60 w-full text-gray-200"/>
                <span className="icon-[tabler--x] cursor-pointer font-bold text-[#9A9B9C] text-2xl"/>
            </div>
            <div className="mt-6">
                <h1 className="text-xl pl-4 text-white">Recent</h1>
                <ul className="mt-2 gap-2 flex flex-col max-h-full overflow-y-auto">
                    <li className="text-gray-200 flex justify-between border-b-[0.3px] border-[#9A9B9C]/50 px-4 py-4 hover:bg-gray-500/20 cursor-pointer transition-all duration-300 ease-in-out">
                        <span className="truncate">Clone the Gemini</span>
                        <span className="text-sm pr-2">Aug 7</span>
                    </li>
                    <li className="text-gray-200 flex justify-between border-b-[0.3px] border-[#9A9B9C]/50 px-4 py-4 hover:bg-gray-500/20 cursor-pointer transition-all duration-300 ease-in-out">
                        <span className="truncate">Build a React App</span>
                        <span className="text-sm pr-2">Jul 29</span>
                    </li>
                    <li className="text-gray-200 flex justify-between border-b-[0.3px] border-[#9A9B9C]/50 px-4 py-4 hover:bg-gray-500/20 cursor-pointer transition-all duration-300 ease-in-out">
                        <span className="truncate">Learn TypeScript</span>
                        <span className="text-sm pr-2">Jun 30</span>
                    </li>
                </ul>
            </div>
        </main>
    )
}
export default memo(SearchPage);
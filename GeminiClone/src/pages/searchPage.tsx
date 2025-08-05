import { memo, useState, useRef } from "react";

function SearchPage() {

    const [inputValue, setInputValue] = useState('');
    const listRef = useRef<HTMLUListElement | null>(null);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (listRef.current) {
            Array.from(listRef.current.children).forEach((el) => {
                if (el.textContent?.toLowerCase().includes(inputValue.toLowerCase())) {
                    el.classList.remove('hidden');
                } else {
                    el.classList.add('hidden');
                }
            });
        }
    };

    const handleClearInput = () => {
        setInputValue('');
    }

    return (
        <main className="max-w-xl mx-auto min-h-full mt-20 transition-all duration-300 ease-in-out">
            <h1 className="text-3xl pl-4 text-white">Search</h1>
            <div className="flex items-center gap-4 w-full ring-[0.3px] ring-[#9A9B9C] rounded-full mt-6 py-3 px-4">
                <button className="icon-[ion--search] cursor-pointer text-[#9A9B9C] text-2xl" />
                <input type="text" placeholder="Search for chats" className="outline-none placeholder:text-[#9A9B9C]/60 w-full text-gray-200"
                    onChange={handleInputChange}
                    value={inputValue}
                />
                {inputValue.length!==0&&inputValue!==' '&&(<button className="icon-[tabler--x] cursor-pointer font-bold text-[#9A9B9C] text-2xl"
                    onClick={handleClearInput}
                />)}
            </div>
            <div className="mt-6">
                <h1 className="text-xl pl-4 text-white">Recent</h1>
                <ul className="mt-2 gap-2 flex flex-col max-h-full overflow-y-auto" ref={listRef}>
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
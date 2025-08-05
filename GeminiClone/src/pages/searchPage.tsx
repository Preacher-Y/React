import { memo, useState } from "react";

function SearchPage() {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClearInput = () => {
        setInputValue('');
        setSelectedItem(null);
    };

    const handleItemClick = (title: string) => {
        setSelectedItem(title);
    };

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

    const filteredItems = inputValue 
        ? items.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
        : items;

    return (
        <main className="max-w-xl mx-auto max-h-full mt-20 transition-all duration-300 ease-in-out">
            {inputValue.length==0 && (<h1 className="text-3xl pl-4 text-white">Search</h1>)}
            <div className="flex items-center gap-4 w-full ring-[0.3px] ring-[#9A9B9C] rounded-full mt-6 py-3 px-4">
                <button className="icon-[ion--search] cursor-pointer text-[#9A9B9C] text-2xl" />
                <input 
                    type="text" 
                    placeholder="Search for chats" 
                    className="outline-none placeholder:text-[#9A9B9C]/60 w-full text-gray-200"
                    onChange={handleInputChange}
                    value={inputValue}
                />
                {inputValue && (
                    <button 
                        className="icon-[tabler--x] cursor-pointer font-bold text-[#9A9B9C] text-2xl"
                        onClick={handleClearInput}
                    />
                )}
            </div>
            <div className="mt-6">
                <h1 className="text-xl pl-4 text-white">Recent</h1>
                <ul className="mt-2 gap-2 flex flex-col max-h-70 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {filteredItems.map((item, index) => (
                        <li 
                            key={item.title}
                            className={`
                                text-gray-300/90 flex justify-between 
                                border-b-[0.3px] border-[#9A9B9C]/50 
                                px-4 py-4 hover:bg-gray-500/20 cursor-pointer 
                                transition-all duration-300 ease-in-out
                                ${selectedItem === item.title ? 'animate-slideUp' : 'opacity-100'}
                            `}
                            style={{
                                transitionDelay: `${index * 50}ms`
                            }}
                            onClick={() => handleItemClick(item.title)}
                        >
                            <span className="truncate">{item.title}</span>
                            <span className="text-sm pr-2">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default memo(SearchPage);
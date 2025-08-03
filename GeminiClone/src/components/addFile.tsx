import React, { useRef } from 'react';

export default function AddFile(){
    const [isclicked, setIsClicked] = React.useState(false);
    const addFile = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsClicked(!isclicked);
    }

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (addFile.current && !addFile.current.contains(e.target as Node)) {
                setIsClicked(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);
    
    return (
        <div ref={addFile}>
            <button className="hover:bg-gray-500/20 cursor-pointer flex items-center gap-1 rounded-full px-2 py-2" onClick={handleClick}>
                <span className="icon-[line-md--plus] cursor-pointer text-xl"/>
            </button>
            {isclicked && (<div className="absolute -top-10 left-3 w-52 bg-[#282A2C] backdrop-blur-md rounded-2xl shadow-lg py-2 transition-all duration-300 ease-in-out">
                <ul>
                    <li className="text-gray-300 hover:bg-gray-600/30 px-6 py-2 cursor-pointer flex gap-3 items-center">
                        <span className='icon-[mdi--paperclip] text-xl'/>
                        Upload Files
                    </li>
                    <li className="text-gray-300 hover:bg-gray-600/30 px-6 py-2 cursor-pointer flex gap-3 items-center">
                        <span className='icon-[basil--google-drive-outline] text-xl'/>
                        Add from Drive
                    </li>
                </ul>
            </div>)}
        </div>
    );
}
import React from 'react';

export default function AddFile(){
    const [isclicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(!isclicked);
    }
    return (
        <>
            <div className="hover:bg-gray-500/20 cursor-pointer flex items-center gap-1 rounded-full px-2 py-2">
                <span className="icon-[line-md--plus] cursor-pointer text-xl" onClick={handleClick}/>
            </div>
            {isclicked && (<div className="absolute -top-10 left-3 w-48 bg-[#282A2C] backdrop-blur-md rounded-lg shadow-lg py-2 transition-all duration-300 ease-in-out">
                <ul>
                    <li className="text-gray-300 hover:bg-gray-600/30 px-3 py-2 cursor-pointer flex gap-1 items-center">
                        <span className='icon-[mdi--paperclip] text-xl'/>
                        Upload Files
                    </li>
                    <li className="text-gray-300 hover:bg-gray-600/30 px-3 py-2 cursor-pointer flex gap-1 items-center">
                        <span className='icon-[basil--google-drive-outline] text-xl'/>
                        Add from Drive
                    </li>
                </ul>
            </div>)}
        </>
    );
}
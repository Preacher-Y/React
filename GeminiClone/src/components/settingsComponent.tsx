import { useOpenContext } from "../hooks/openContext";
import { useState } from "react";
import { useOpen2Context } from "../hooks/open2Context";
import { useOpen3Context } from "../hooks/open3Context";
import clsx from "clsx";

export default function Settings() {
    const { isOpen } = useOpenContext();
    const { isOpen2 } = useOpen2Context();
    const {isOpen3,setIsOpen3} = useOpen3Context();
    const [isSpining, setIsSpinning] = useState(false);
    return (
        <>
            <button className={clsx("text-gray-300 group z-50 absolute bottom-0 mb-4 mx-4 px-2 py-2 flex items-center gap-2 truncate hover:bg-gray-500/20 cursor-pointer rounded-full",{
            "w-[88%]": isOpen&&!isOpen2,
            "":isOpen2&&!isOpen,
            })}
                onMouseEnter={() =>{ 
                    setIsSpinning(true)
                    setTimeout(() => {
                     setIsSpinning(false)
                }, 500)}}
                onMouseLeave={() =>{ 
                    setIsSpinning(true)
                    setTimeout(() => {
                     setIsSpinning(false)
                }, 500)}}
                onClick={()=>setIsOpen3(prev=>!prev)}
            >
                <span className={clsx("icon-[clarity--settings-solid] cursor-pointer text-[21px]",{
                    "animate-spin": isSpining,
                })} />
                {!isOpen2 && isOpen && <span className="truncate">Settings & Help</span>}
            </button>
            {isOpen3 && (
                <div className="absolute bottom-10 left-32 z-50 w-52 bg-[#282A2C] backdrop-blur-md rounded-2xl shadow-lg py-2 transition-all duration-300 ease-in-out">
                    <div>
                        <button className="flex items-center gap-2 hover:bg-gray-500/20 rounded-full px-2 py-1.5 transition-all duration-300 ease-in-out">
                            <span className="icon-[material-symbols--share] cursor-pointer text-gray-200"/>
                            <h1 className="text-gray-200 hover:bg-gray-500/20 cursor-pointer rounded-full px-2 py-1.5 transition-all duration-300 ease-in-out">Share</h1>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
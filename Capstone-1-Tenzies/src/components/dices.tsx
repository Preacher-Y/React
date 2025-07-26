export default function Dices({value,setIsHeld}:{value:number,setIsHeld:React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <>
            <button className="bg-gray-100 w-12 h-10 hover:bg-green-400 text-center rounded drop-shadow-[0px_0px_2px_gray] text-xl " onClick={()=>setIsHeld((prev)=>!prev)}>{value}</button>
        </>
    )
}
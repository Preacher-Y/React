
export default function Dices({value,isHeld,id,toggleHold}:{value:number,isHeld:boolean,id:string,toggleHold:(id:string)=>void}){
    return(
        <>
            <button className={`${isHeld?'bg-green-400 hover:bg-green-800':'bg-gray-100 hover:bg-green-500'} w-12 h-10 text-center rounded drop-shadow-[0px_0px_2px_gray] text-xl `} onClick={()=>{toggleHold(id)}}>{value}</button>
        </>
    )
}
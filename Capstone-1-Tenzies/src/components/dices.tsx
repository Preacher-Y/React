
export default function Dices({value,isHeld,id,toggleHold}:{value:number,isHeld:boolean,id:string,toggleHold:(id:string)=>void}){
    return(
        <>
            <button className={`${isHeld?'bg-green-400':'bg-gray-100'} w-12 h-10 hover:bg-green-400 text-center rounded drop-shadow-[0px_0px_2px_gray] text-xl `} onClick={()=>{toggleHold(id)}}>{value}</button>
        </>
    )
}
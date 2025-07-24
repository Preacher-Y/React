export default function Dices({value}:{value:number}){
    return(
        <>
            <button className="bg-gray-100 w-12 h-10 hover:bg-green-400 text-center rounded drop-shadow-[0px_0px_2px_gray] text-xl ">{value}</button>
        </>
    )
}
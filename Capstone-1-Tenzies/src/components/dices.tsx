export default function Dices(){
    const randNumber= Math.floor(Math.random() * 6) + 1;
    return(
        <>
            <button className="bg-gray-100 w-12 h-10 hover:bg-green-300 text-center rounded drop-shadow-[0px_0px_2px_gray] text-xl ">{randNumber}</button>
        </>
    )
}
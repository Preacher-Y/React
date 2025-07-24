import Dices from "./dices";
export default function AllDices({dice}:{dice:number[]}) {
    
    const diceElements = dice.map(num => <Dices value={num} />)

    return(
        <div className="flex flex-col gap-6 ">
            {diceElements}
        </div>
    )
}
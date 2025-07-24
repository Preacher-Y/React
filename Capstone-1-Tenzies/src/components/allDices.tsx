import Dices from "./dices";
export default function AllDices({dice}:{dice:number[]}) {
    
    const diceElements = dice.map(num => <Dices value={num} />)

    return(
        <div className="grid grid-cols-5 gap-10 ">
            {diceElements}
        </div>
    )
}
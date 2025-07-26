import Dices from "./dices";
import type { Die } from "../App";

export default function AllDices({dice,toggleHold}:{dice:Die[],toggleHold:(id:string)=>void}) {
    
    const diceElements = dice.map(el => <Dices value={el.value} key={el.id} id={el.id} isHeld={el.isHeld} toggleHold={toggleHold}/>)

    return(
        <div className="grid grid-cols-5 gap-10 ">
            {diceElements}
        </div>
    )
}
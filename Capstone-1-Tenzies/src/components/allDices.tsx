import Dices from "./dices";
import type { Die } from "../App";
import type React from "react";
export default function AllDices({dice,setIsHeld}:{dice:Die[],setIsHeld:React.Dispatch<React.SetStateAction<boolean>>}) {
    
    const diceElements = dice.map(el => <Dices value={el.value} key={el.id} setIsHeld={setIsHeld}/>)

    return(
        <div className="grid grid-cols-5 gap-10 ">
            {diceElements}
        </div>
    )
}
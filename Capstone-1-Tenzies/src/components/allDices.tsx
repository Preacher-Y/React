import Dices from "./dices";
import { useDiceContext } from "./hooks/context";

export default function AllDices() {

    const dice = useDiceContext()

    const diceElements = dice.map(el => <Dices isDisabled={dice.every(el=>el.value===dice[0].value) && dice.every(el=>el.isHeld)} value={el.value} key={el.id} id={el.id} isHeld={el.isHeld}/>)

    return(
        <div className="grid grid-cols-5 mt-12 gap-10 ">
            {diceElements}
        </div>
    )
}
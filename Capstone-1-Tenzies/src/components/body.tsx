import AllDices from "./allDices"
import type { Die } from "../App"
export default function Body({dice,toggleHold}:{dice:Die[],toggleHold:(id:string)=>void}){
    return(
        <>
            <p className="text-center font-medium">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls. 
            </p>
            <AllDices dice={dice} toggleHold={toggleHold}/>
        </>
    )
}
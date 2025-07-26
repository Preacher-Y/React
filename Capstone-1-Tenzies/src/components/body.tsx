import AllDices from "./allDices"
import type { Die } from "../App"
export default function Body({dice,toggleHold}:{dice:Die[],toggleHold:(id:string)=>void}){
    return(
        <>
            <h1 className="text-center">
                Roll dice 
            </h1>
            <AllDices dice={dice} toggleHold={toggleHold}/>
        </>
    )
}
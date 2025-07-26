import AllDices from "./allDices"
import type { Die } from "../App"
export default function Body({dice,setIsHeld}:{dice:Die[],setIsHeld:React.Dispatch<React.SetStateAction<boolean>>}){
    return(
        <>
            <h1 className="text-center">
                Roll dice 
            </h1>
            <AllDices dice={dice} setIsHeld={setIsHeld}/>
        </>
    )
}
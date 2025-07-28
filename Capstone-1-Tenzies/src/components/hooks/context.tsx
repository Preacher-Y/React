import { createContext,useContext } from "react";
import type { Die } from "../../App";

export const DiceContext = createContext<Die[]|undefined>(undefined);
export const ToggleHoldContext = createContext<((id:string)=>void)|undefined>(undefined)

export function useDiceContext(){
    const dice = useContext(DiceContext)

    if (dice === undefined){
        throw new Error("The Dice Is undefined, this may be due to the absence of the Provider");   
    }

    return dice
}

export function useToggleHoldContext(){
    const toggleHold = useContext(ToggleHoldContext)

    if (toggleHold === undefined){
        throw new Error("The Dice Is undefined, this may be due to the absence of the Provider");   
    }

    return toggleHold
}
import { createContext, useContext } from "react";

export const wordContext = createContext<string|undefined>(undefined)

export function useWordContext(){
    const word = useContext(wordContext)

    if(word===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return word
}
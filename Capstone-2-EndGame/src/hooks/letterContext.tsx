import { createContext, useContext } from "react";

type letterContextType={
    letter : string[];
    setLetter: React.Dispatch<React.SetStateAction<string[]>>
}

export const letterContext = createContext<letterContextType|undefined>(undefined)

export function useLetterContext(){
    const contextLetter = useContext(letterContext)

    if(contextLetter===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextLetter
}
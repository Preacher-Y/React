import React, { createContext, useContext } from "react";

type wordContextType={
    word:string;
    setWord: React.Dispatch<React.SetStateAction<string>>
}

export const wordContext = createContext<wordContextType|undefined>(undefined)

export function useWordContext(){
    const contextWord = useContext(wordContext)

    if(contextWord===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextWord
}
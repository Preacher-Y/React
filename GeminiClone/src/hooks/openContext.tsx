import React, { createContext, useContext } from "react";

type openContextType={
    isOpen:boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const openContext = createContext<openContextType|undefined>(undefined)

export function useOpenContext(){
    const contextOpen = useContext(openContext)

    if(contextOpen===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpen
}
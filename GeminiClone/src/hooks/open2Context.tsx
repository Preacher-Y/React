import React, { createContext, useContext } from "react";

type open2ContextType={
    isOpen2:boolean;
    setIsOpen2: React.Dispatch<React.SetStateAction<boolean>>
}

export const open2Context = createContext<open2ContextType|undefined>(undefined)

export function useOpen2Context(){
    const contextOpen2 = useContext(open2Context)

    if(contextOpen2===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpen2
}
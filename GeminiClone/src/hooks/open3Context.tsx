import React, { createContext, useContext } from "react";

type open3ContextType={
    isOpen3:boolean;
    setIsOpen3: React.Dispatch<React.SetStateAction<boolean>>
}

export const open3Context = createContext<open3ContextType|undefined>(undefined)

export function useOpen3Context(){
    const contextOpen3 = useContext(open3Context)

    if(contextOpen3===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpen3
}
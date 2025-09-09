import React, { createContext, useContext, useState } from "react";

type openContextType={
    isOpen:boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const openContext = createContext<openContextType|undefined>(undefined)


export default function OpenContextProvider({children}:{children:React.ReactNode}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <openContext.Provider value={{isOpen, setIsOpen}}>{children}</openContext.Provider>
    )
}
export function useOpenContext(){
    const contextOpen = useContext(openContext)


    if(contextOpen===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpen
}
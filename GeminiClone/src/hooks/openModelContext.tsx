import React, { createContext, useContext } from "react";

type openModelContextType={
    isOpenModel:boolean;
    setIsOpenModel: React.Dispatch<React.SetStateAction<boolean>>
}

export const openModelContext = createContext<openModelContextType|undefined>(undefined)

export function useOpenModelContext(){
    const contextOpenModel = useContext(openModelContext)

    if(contextOpenModel===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpenModel
}
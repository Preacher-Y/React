import React, { createContext, useContext } from "react";

type openSettingsContextType={
    isOpenSettings:boolean;
    setIsOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export const openSettingsContext = createContext<openSettingsContextType|undefined>(undefined)

export function useOpenSettingsContext(){
    const contextOpenSettings = useContext(openSettingsContext)

    if(contextOpenSettings===undefined){
        throw new Error("The context has an error, Try checking the provider in the App.tsx ");
    }
    return contextOpenSettings
}
import { createContext, useContext } from "react";

type SearchContextType = {
    isSearchClicked:boolean;
    setIsSearchClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const searchContext = createContext<SearchContextType|undefined>(undefined);

export function useSearchContext(){
    const contextSearch = useContext(searchContext)
    if(contextSearch === undefined){
        throw new Error("The search context has an error, Try checking the provider in the App.tsx");
    }
    return contextSearch; 
}
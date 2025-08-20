import { createContext, useContext } from "react";

type LoginContextType={
    isLoggedIn:boolean;
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginContext = createContext<LoginContextType|undefined>(undefined)

export function useLoginContext(){
    const contextLogin = useContext(LoginContext);

    if(!contextLogin){
        throw new Error('Try checking the App.tsx component')
    }
    return contextLogin
}
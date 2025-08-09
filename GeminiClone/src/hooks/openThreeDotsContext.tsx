import { createContext,useContext } from "react";

interface openThreeDotsContextType {
    isThreeDotsClicked: boolean;
    setIsThreeDotsClicked: (isThreeDotsClicked: boolean) => void;
}

export const openThreeDotsContext = createContext<openThreeDotsContextType|undefined>(undefined);

export const useOpenThreeDotsContext = () => {
    const contextOpenThreeDots = useContext(openThreeDotsContext);
    if (contextOpenThreeDots === undefined) {
        throw new Error("useOpenThreeDotsContext must be used within a OpenThreeDotsContextProvider");
    }
    return contextOpenThreeDots;
};
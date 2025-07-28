import { createContext } from "react";
import type { Die } from "../../App";

export const DiceContext = createContext<Die[]|undefined>(undefined);
export const ToggleHoldContext = createContext<((id:string)=>void)|undefined>(undefined)
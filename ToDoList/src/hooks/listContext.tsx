import React, { createContext, useContext } from "react";

type todoContextType = {
  todo: string[];
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
};

export const todoContext = createContext<todoContextType | undefined>(undefined);

export function useTodoContext() {
  const contextTodo = useContext(todoContext);

  if (contextTodo === undefined) {
    throw new Error("The context has an error. Check if the provider is correctly wrapping your component tree.");
  }

  return contextTodo;
}

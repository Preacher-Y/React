import React, { createContext, useContext, useState } from "react";

type RecipeContextType = {
  recipe: string | null;
  setRecipe: (recipe: string) => void;
};

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipe = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (!context) throw new Error("useRecipe must be used within a RecipeProvider");
  return context;
};

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipe, setRecipe] = useState<string | null>(null);

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

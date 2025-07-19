import React, { createContext, useContext, useState } from 'react';

type IngredientsContextType = {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
};

const IngredientsContext = createContext<IngredientsContextType | undefined>(undefined);

export const IngredientsProvider = ({ children }: { children: React.ReactNode }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <IngredientsContext.Provider value={{ ingredients, setIngredients }}>
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => {
  const context = useContext(IngredientsContext);
  if (!context) {
    throw new Error('useIngredients must be used within an IngredientsProvider');
  }
  return context;
};

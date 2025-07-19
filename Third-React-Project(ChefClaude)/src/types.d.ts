export type Ingredient = {
  name: string;
  measurement: string;
};
export type RecipeType = {
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
};

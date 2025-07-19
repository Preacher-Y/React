import { InferenceClient } from "@huggingface/inference";
import type { RecipeType } from "./types"; // adjust path as needed

const token = import.meta.env.VITE_CHEF_CLAUDE_API_KEY ;
if (!token) throw new Error("Hugging Face token is missing.");
const hf = new InferenceClient( token );


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients(bullet-pointed and with measurements) that a user has and suggests a recipe 
they could make with some or all of those ingredients. You don't need to use every ingredient 
they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. give it me in an object format with the following keys:
- name: the name of the recipe
- description: a short description of the recipe
- ingredients: a list of ingredients with measurements(an array)
- instructions: a list of instructions to make the recipe(an array)
- image: a URL to an image of the recipe
Make sure to include the measurements for each ingredient, and provide clear and concise instructions.
If you don't have enough information to suggest a recipe, respond with "I don't know".
`;

export default async function getRecipeFromMistral(ingredientsArr: string[]): Promise<RecipeType | undefined> {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    });

    const data = response.choices?.[0]?.message?.content;
    if (typeof data === "string") {
      return JSON.parse(data) as RecipeType;
    }
    return undefined;
  } catch (err: any) {
    console.error(err.message);
    return undefined;
  }
}

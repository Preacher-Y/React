import Button from "./button";
import { useIngredients } from "./context";

export default function Generate() {
    const { ingredients } = useIngredients();
    return (
        <>
        {ingredients.length >= 3 &&
            (<div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 flex transition-all duration-500 items-end gap-2 ">
                <div className="px-3">
                    <h1 className="font-bold dark:text-gray-300 text-base mb-1">Ready for a recipe?</h1>
                    <p className="text-gray-500 text-xs">
                        Generate a delicious recipe based on the ingredients you have on hand.
                    </p>
                </div>
                <Button
                    text="Get a recipe"
                    color="bg-red-400"
                    size="py-2 px-5 items-center rounded-lg text-sm hover:bg-red-400/80 transition-all duration-500"
                    onClick={() => alert("Recipe generated!")}
                />
            </div>)}
        </>
    );
}
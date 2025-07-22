import Loading from "./loading";
import { useRecipe } from "./recipeContext";
import { useIngredients } from "./ingredientsContext";

export default function Results({
    loading,
    hasGenerated,
}: {
    loading: boolean,
    hasGenerated: boolean,
}) {
    const { recipe } = useRecipe();
    const { ingredients } = useIngredients();
    if (!hasGenerated || ingredients.length < 3 || !recipe) return null;

    return (
        <div className="min-h-screen py-8 px-5 mt-3 bg-gray-50 md:mb-16 lg:mb-6 dark:bg-gray-900  items-center justify-center rounded-2xl " aria-live="polite">
            {loading ? (
                <Loading />
            ) : (
                recipe ? (
                    <>
                        <h1 className="text-3xl font-bold dark:text-white" >Suggested Recipe:</h1>
                        <div className="mx-3 my-1">
                            <h1 className="text-2xl font-bold dark:text-white mt-4">{recipe.name}</h1>
                            <p className="mt-2 text-lg dark:text-gray-200">{recipe.description}</p>
                            <h2 className="mt-4 text-xl font-semibold dark:text-white">Ingredients</h2>
                            <ul className="list-disc list-inside pl-4 dark:text-gray-200">
                                {recipe.ingredients
                                    .filter(item => item && (item.name || item.measurement))
                                    .map((item, idx) => (
                                        <li key={idx} className="mt-1">
                                            {item.measurement ? `${item.measurement} ` : ""}{item.name}
                                        </li>
                                    ))}
                            </ul>
                            <h2 className="mt-4 text-xl font-semibold dark:text-white">Instructions</h2>
                            <ol className="list-decimal list-inside pl-4 dark:text-gray-200">
                                {recipe.instructions && recipe.instructions.map((step: string, idx: number) => (
                                    <li key={idx} className="mt-2">{step}</li>
                                ))}
                            </ol>
                        </div>
                    </>
                ) : (
                    <p className="text-red-500">Failed to load recipe.</p>
                )
            )}
        </div>
    );
}
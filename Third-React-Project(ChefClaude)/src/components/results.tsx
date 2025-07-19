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
    if (!hasGenerated || ingredients.length < 3) return null;

    return (
        <div className="min-h-screen pt-16 bg-gray-50 md:mb-16 lg:mb-6 dark:bg-gray-900  items-center justify-center rounded-2xl">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1 className="text-2xl font-bold dark:text-white ">Suggested Recipe </h1>
                    <pre className="dark:text-white ">{recipe}</pre>
                </>
            )}
        </div>
    );
}
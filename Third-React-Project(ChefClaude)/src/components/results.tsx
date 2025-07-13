import { useState } from "react"
import Loading from "./loading";
import { useIngredients } from "./context";
export default function Results(prop:any): React.JSX.Element {
    const [loading, setLoading] = useState(true);
    const {ingredients} = useIngredients();
    return (
        <>{
            ingredients.length>= 3 && (
                <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center rounded-2xl">
                {loading ? (
                    <Loading />
                ) : (
                    setLoading(false),
                    <>
                        <h1 className="text-2xl font-bold dark:text-white ">Suggested Recipe </h1>
                        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{prop.name}</h2>
                            <p className="text-gray-700 dark:text-gray-300">This is a delicious recipe that you can make with the ingredients you have.</p>
                            <ul className="list-disc pl-5 mt-3">
                                <li>Ingredient 1</li>
                                <li>Ingredient 2</li>
                                <li>Ingredient 3</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
            )
        }
        </>
    )
}
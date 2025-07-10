import Button from "./button";
export default function Generate() {
    return (
        <div className="bg-gray-200 rounded-2xl p-5 flex ">
            <div className="px-4">
                <h1 className="font-bold text-base mb-1">Ready for a recipe?</h1>
                <p className="text-gray-500 text-[12px]">
                    Generate a delicious recipe based on the ingredients you have on hand.
                </p>
            </div>
            <Button
                text="Get a recipe"
                color="bg-orange-400"
                size="py-2 px-4 scale-70 flex items-center content-end hover:scale-80 hover:shadow-[0px_0px_8px_darkOrange] transition-all duration-500"
                onClick={() => alert("Recipe generated!")}
            />
        </div>
    );
}
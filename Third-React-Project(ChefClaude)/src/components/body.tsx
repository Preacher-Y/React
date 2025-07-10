import Button from './button';
import { BiPlusCircle } from 'react-icons/bi';
import Ingredients from './ingredients';
import Generate from './generate';

export default function Body() {
    return (
        <div className="max-w-2xl mx-auto">
            <section id ='hero' className="p-4 mt-32 mb-16 relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4">
                    Welcome to Chef Claude
                </h2>
                <p className="text-gray-700 mb-6 text-center mx-auto w-full sm:w-3/4">
                    Chef Claude is your personal AI chef, ready to assist you with all your culinary needs. Whether you're looking for recipes, cooking tips, or meal planning ideas, Chef Claude has got you covered.
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center mt-20 mb-1 gap-4'>
                    <input
                        type="text"
                        placeholder='e.g oregano'
                        className='py-1.5 px-2 w-full sm:w-80 outline-none border-b-2 border-gray-300 focus:border-black'
                    />
                    <Button
                        text={<><BiPlusCircle className='mr-2' size={20}/> Add Ingredient</>}
                        color="bg-black/90"
                        size="py-2 flex items-center w-full sm:w-50 justify-center hover:-translate-y-1 hover:shadow-[0px_0px_8px_black] max-sm:mt-3 transition-all duration-500 px-4 sm:ml-4"
                        onClick={handleAddIngredient}

                    />
                </div>
                <p className='px-24 md:px-30 text-gray-500 text-xs '>at least 3 ingredients are required</p>
            </section>
            <section className='p-4 mt-9 relative'>
                <h1 className="font-bold text-2xl">Ingredients on hand:</h1>
                <Ingredients />
            </section>
            <section className='p-4 mt-9 relative'>
                <Generate />
            </section>
        </div>
    );
}

function handleAddIngredient() {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    const ingredientList = document.getElementById('ingredients-list') as HTMLUListElement;

    if (input.value.trim() === '') {
        input.focus();
        return;
    }

    const newIngredient = document.createElement('li');
    newIngredient.className = 'flex items-center justify-between py-1';
    
    const ingredientText = document.createElement('li');
    ingredientText.textContent = input.value.trim();
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '×';
    deleteButton.className = 'ml-2 text-xl text-gray-500 hover:text-red-700 font-bold';
    deleteButton.onclick = () => {
        ingredientList.removeChild(newIngredient);
    };
    
    newIngredient.appendChild(ingredientText);
    newIngredient.appendChild(deleteButton);
    ingredientList.appendChild(newIngredient);
    input.value = '';
}
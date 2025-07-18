import React, { useState } from 'react';
import Button from './button';
import { BiPlusCircle } from 'react-icons/bi';
import { useIngredients } from './context';
export default function IngredientForm():React.JSX.Element {
  const {ingredients, setIngredients} = useIngredients();
  const [inputValue, setInputValue] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const handleAddIngredient = (e: React.FormEvent):void => {
    e.preventDefault();
    
    const inputElement = document.getElementById('input') as HTMLInputElement;
    if (inputValue.trim() === '') {
      setAlertMessage('Please enter a valid ingredient.');
      inputElement.focus();
      return;
    }

    if (ingredients.includes(inputValue.trim())) {
      setAlertMessage('This ingredient is already in the list.');
      inputElement.classList.add('border-red-500','cursor-not-allowed');
      setTimeout(() => {
        inputElement.classList.remove('border-red-500', 'cursor-not-allowed');
        setAlertMessage('');
      }, 3000);
      return;
    }

    if (ingredients.length >= 10) {
      setAlertMessage('You can only add up to 10 ingredients.');
      inputElement.classList.add('border-red-500','cursor-not-allowed');
      setTimeout(() => {
        setInputValue('');
        setAlertMessage('');
      }, 1000);
      return;
    }

    setIngredients([...ingredients, inputValue.trim()]);
    setInputValue('');
    setAlertMessage('');
  };

  const clearAllIngredients = ():void =>{
    setIngredients([]);
    setInputValue('');
    setAlertMessage('');
    const inputElement = document.getElementById('input') as HTMLInputElement;
    inputElement.focus();
  }
  const handleDelete = (index: number):void => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  return (
    <div>
      <form onSubmit={handleAddIngredient}className='flex flex-col sm:flex-row justify-center items-center mt-20 mb-1 gap-4'>
        <input
            type="text"
            placeholder='e.g oregano'
            name='Inggredient'
            value={inputValue}
            aria-label='ingredient'
            id='input'
            onChange={(e) => setInputValue(e.target.value)}
            className='py-1.5 px-2 w-full dark:placeholder:text-gray-400 placeholder:text-gray-500 sm:w-80 outline-none border-b-2 dark:text-white dark:border-gray-800 dark:focus:border-gray-500 border-gray-300 focus:border-black'
        />
        <Button
            text={<><BiPlusCircle className='mr-2' size={20}/> Add Ingredient</>}
            color="bg-black/90"
            size="py-2 flex items-center rounded-lg dark:bg-gray-700 dark:hover:bg-gray-700/70 w-full sm:w-50 justify-center hover:scale-102 hover:shadow-[0px_0px_8px_black] max-sm:mt-3 transition-all duration-500 px-4 sm:ml-4"
            onClick={handleAddIngredient}

        />
      </form>

      {
        alertMessage && (
        <p id="alert" className="text-red-500 dark:text-red-400 max-sm:text-sm text-xs mx-16 md:mx-26 mt-2">
          {alertMessage}
        </p>
      )}

      {
      ingredients.length > 0 && (
        <>
          <div className='flex items-center justify-between mt-20 '>
            <h1 className="font-bold dark:text-gray-200 text-2xl">Ingredients on hand:</h1>
            <p className='text-gray-500 hover:text-red-500 font-bold hover:underline underline-offset-2 cursor-pointer text-xs' onClick={clearAllIngredients}>Clear All</p>
          </div>

          <ul id="ingredients-list" className="list-disc dark:marker:text-gray-400 dark:text-gray-400 mt-4 pl-7">
            {ingredients.map((ingredient, i) => (
              <li key={i}> 
                <div className="flex items-center justify-between py-1">
                    {ingredient}
                    <button
                        onClick={() => handleDelete(i)}
                        className="ml-2 text-xl text-gray-500 hover:text-red-700 font-bold cursor-pointer"
                    >×</button>
                </div>
            </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

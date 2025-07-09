import Button from '../components/button';
import { BiPlus } from 'react-icons/bi';
export default function Body() {
    return (
        <div className="max-w-4xl mx-auto p-4 mt-9">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4">
                Welcome to Chef Claude
            </h2>
            <p className="text-gray-700 mb-6 text-center mx-auto w-full sm:w-3/4">
                Chef Claude is your personal AI chef, ready to assist you with all your culinary needs. Whether you're looking for recipes, cooking tips, or meal planning ideas, Chef Claude has got you covered.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center my-8 gap-4'>
                <input
                    type="text"
                    placeholder='e.g oregano'
                    className='py-1.5 px-2 w-full sm:w-80 outline-none border-b-2 border-gray-300 focus:border-black'
                />
                <Button
                    text={<><BiPlus className='mr-2'/> Add Ingredient</>}
                    color="bg-black/90"
                    size="py-2 flex items-center w-full sm:w-50 justify-center hover:-translate-y-1 hover:shadow-[0px_0px_8px_black] transition-all duration-500 px-4 sm:ml-4"
                />
            </div>
        </div>
    );
}
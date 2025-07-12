import IngedientsForm from './ingredients';
import Generate from './generate';

export default function Body() {
    return (
        <div className="max-w-2xl mx-auto">
            <section id ='hero' className="p-4 mt-32 mb-16 relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl dark:text-gray-100 text-center font-bold mb-4">
                    Welcome to Chef Claude
                </h2>
                <p className="text-gray-700 mb-6 dark:text-gray-300 text-center mx-auto w-full sm:w-3/4">
                    Chef Claude is your personal AI chef, ready to assist you with all your culinary needs. Whether you're looking for recipes, cooking tips, or meal planning ideas, Chef Claude has got you covered.
                </p>
            </section>
            <section className="px-5 relative">
                <IngedientsForm />
            </section>
            <section className='p-4 mt-9 relative'>
                <Generate />
            </section>
        </div>
    );
}

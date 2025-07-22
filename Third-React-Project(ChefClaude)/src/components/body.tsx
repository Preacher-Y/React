import { useRef, useState } from "react";
import { Element } from 'react-scroll'
import IngedientsForm from './ingredients';
import Generate from './generate';
import Results from './results';

export default function Body() {
    const [loading, setLoading] = useState(true);
    const [hasGenerated, setHasGenerated] = useState(false);
    const results = useRef<HTMLElement|null>(null)

//     useEffect(() => {
//     if (loading && hasGenerated && results.current) {
//       results.current.scrollTo({ top:10,behavior: "smooth" });
//     }
//   }, [loading, hasGenerated]);

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
            <section id='ingedrient-form' className="px-5 relative">
                <IngedientsForm setHasGenerated={setHasGenerated}/>
            </section>
            <section id='generate-recipe' className='p-4 mt-9 relative'>
                <Generate setLoading={setLoading} setHasGenerated={setHasGenerated} />
            </section>
            <Element name="results-section">
                <section id='results' ref={results} className='p-4 mt-14 relative'>
                    <Results loading={loading} hasGenerated={hasGenerated} />
                </section>
            </Element>
        </div>
    );
}


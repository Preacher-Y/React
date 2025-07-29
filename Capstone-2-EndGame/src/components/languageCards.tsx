import { useLetterContext } from "../hooks/letterContext";
import { useWordContext } from "../hooks/wordContext";
import { languages } from "../languages";

export default function LanguagesCards(){

    const {letter} = useLetterContext()
    const {word} = useWordContext()

    const wrongGuessCount = letter.filter(el=> !word.includes(el)).length

    return(
        <section className="flex max-w-md mx-auto justify-center flex-wrap gap-1">
            {languages.map((el,i)=>{
                const isDead = wrongGuessCount>i
                return (        
                    <div key={el.name} className="relative">
                        <h1 style={{ backgroundColor: el.backgroundColor, color: el.color }} 
                            className={`relative font-bold px-3 py-1 rounded transition duration-300 
                                ${isDead ? "opacity-30" : ""}`}>     
                            {el.name}
                        </h1>
                        {isDead && (
                                <span className="absolute inset-0 flex items-center justify-center text-xl rounded">
                                💀
                                </span>
                            )}
                    </div>
                )
        })}
        </section>
    )
}
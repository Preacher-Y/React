import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"
import { languages } from "../languages"
export default function Status() {

    const {letter} = useLetterContext()
    const {word} = useWordContext()

    const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1
    const isGameWon = [...new Set(word.split(''))].every(el=> letter.includes(el))
    
    return(
        <>
            {isGameWon&&(<section className="text-xl mt-6 rounded font-bold transition-all animate-bounce duration-3000 delay-1000 ease-in-out bg-green-700 py-1">
                <h1>You Win!</h1>
                <p className="pl-5">Well Done🎉</p>
            </section>)}
            {isGameFailed&&(<section className="text-xl mt-6 rounded font-bold transition-all animate-bounce duration-3000 delay-1000 ease-in-out bg-red-700 py-4">
                <h1>You Lost!</h1>
                <p className="pl-5"> No Programing Language left in the world 😭</p>
            </section>)}
        </>
    )
}
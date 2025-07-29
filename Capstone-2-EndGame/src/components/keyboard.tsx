import React from "react"
import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"
import { languages } from "../languages"
import clsx from "clsx"

export default function Keyboard(){

    const {letter,setLetter} = useLetterContext()
    const {word} = useWordContext()
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()

    const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1
    const isGameWon = [...new Set(word.split(''))].every(el=> letter.includes(el))
      
    const gameOver = isGameFailed||isGameWon

    function addGuessedLetter(letter:string):void{
        setLetter(prev=>prev.includes(letter)?prev:[...prev,letter])
    }

   React.useEffect(() => {
        function handleKeyPress(e: KeyboardEvent) {
            const key = e.key.toUpperCase();
            if (!gameOver && keys.includes(key)) {
            addGuessedLetter(key);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [letter, gameOver]);

    return (
        <section className="flex justify-center flex-wrap gap-2 mx-10 my-6">
            {keys.split('').map(el=>{
                
                return(
                    <button
                        key={el}
                        onClick={() => addGuessedLetter(el)}
                        disabled={gameOver || letter.includes(el)}
                        className={clsx(
                            "w-14 h-14 rounded-md font-bold text-2xl place-self-center border border-white ping content-center",
                            {
                            "opacity-50":isGameWon&& !word.toUpperCase().includes(el) || isGameFailed,
                            "bg-green-600 text-white": letter.includes(el) && word.toUpperCase().includes(el),
                            "bg-red-600 text-white": letter.includes(el) && !word.toUpperCase().includes(el),
                            "bg-yellow-500 text-[#333233]": !letter.includes(el),
                            }
                        )}
                        >
                        {el}
                    </button>
                )
            })}
        </section>
    )
}
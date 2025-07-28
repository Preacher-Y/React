import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"
import clsx from "clsx"

export default function Keyboard(){

    const {letter,setLetter} = useLetterContext()
    const {word} = useWordContext()

    function addGuessedLetter(letter:string):void{
        setLetter(prev=>prev.includes(letter)?prev:[...prev,letter])
    }

    const keys = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()
    return (
        <section className="flex justify-center flex-wrap gap-2 mx-10 my-6">
            {keys.split('').map(el=>{
                
                return(
                    <button
                        key={el}
                        onClick={() => addGuessedLetter(el)}
                        disabled={letter.includes(el)}
                        className={clsx(
                            "w-14 h-14 rounded-md font-bold text-2xl place-self-center border border-white content-center",
                            {
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
import clsx from "clsx";
import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"
import { languages } from "../languages"
import { nanoid } from "nanoid";

export default function Word(){

    const {word} = useWordContext()
    const {letter} = useLetterContext()

    const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1

    return (
        <section className="flex justify-center gap-2 my-10">
            {word.toUpperCase().split('').map(el=><span key={nanoid()} className={clsx("border-b-2 border-b-gray-500 content-center w-12 h-12 text-2xl bg-[#333233] font-bold", 
                {
                    "text-red-500": isGameFailed && !letter.includes(el),
                    "text-white": !isGameFailed && letter.includes(el) 
                }) }>{isGameFailed||letter.includes(el)?el:""}</span>)}
        </section>
    )
}
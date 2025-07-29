import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"

export default function Word(){

    const {word} = useWordContext()
    const {letter} = useLetterContext()

    return (
        <section className="flex justify-center gap-2 my-10">
            {word.toUpperCase().split('').map(el=><span key={el} className="border-b-2 border-b-gray-500 content-center w-12 h-12 text-2xl bg-[#333233] font-bold">{letter.includes(el)?el:''}</span>)}
        </section>
    )
}
import { useWordContext } from "../hooks/wordContext"

export default function Word(){

    const {word} = useWordContext()

    return (
        <section className="flex justify-center gap-2 my-10">
            {word.toUpperCase().split('').map(el=><span className="border-b-2 border-b-gray-500 content-center w-12 h-12 text-2xl bg-[#333233] font-bold">{el}</span>)}
        </section>
    )
}
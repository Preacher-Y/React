import { languages } from "../languages";

export default function LanguagesCards(){
    return(
        <section className="flex justify-center flex-wrap mx-14 gap-1">
            {languages.map(el=><h1 key={el.name} className={`bg-[${el.backgroundColor}] text-[${el.color}] font-bold px-1.5 py-0.5 rounded`}>{el.name}</h1>)}
        </section>
    )
}
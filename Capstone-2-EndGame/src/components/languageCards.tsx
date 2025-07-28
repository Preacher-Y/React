import { languages } from "../languages";

export default function LanguagesCards(){
    return(
        <section className="flex max-w-md mx-auto justify-center flex-wrap gap-1">
            {languages.map(el=><h1 key={el.name} style={{ backgroundColor: el.backgroundColor, color: el.color }} className={`font-bold px-1.5 py-0.5 rounded`}>{el.name}</h1>)}
        </section>
    )
}
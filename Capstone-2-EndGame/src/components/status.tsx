import React from "react"
import { useLetterContext } from "../hooks/letterContext"
import { useWordContext } from "../hooks/wordContext"
import { languages } from "../languages"
export default function Status() {

    const {letter} = useLetterContext()
    const {word} = useWordContext()

    const isGameFailed = letter.filter(el=> !word.includes(el)).length >= languages.length-1
    const isGameWon = [...new Set(word.split(''))].every(el=> letter.includes(el))
    const wrongGuessCount = letter.filter(el=> !word.includes(el)).length
    const [farewell, setFarewell] = React.useState<string | null>(null)

    function getFarewellText(language:string) {
        const options = [
            `Farewell, "${language}"`,
            `Adios, "${language}"`,
            `R.I.P., "${language}"`,
            `We'll miss you, "${language}"`,
            `Oh no, not "${language}"!`,
            `"${language}" bites the dust`,
            `Gone but not forgotten, "${language}"`,
            `The end of "${language}" as we know it`,
            `Off into the sunset, "${language}"`,
            `"${language}", it's been real`,
            `"${language}", your watch has ended`,
            `"${language}" has left the building`
        ];

        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    React.useEffect(() => {
        const deadLanguages = languages.slice(0, wrongGuessCount);
        const newlyDead = deadLanguages[deadLanguages.length - 1];

        if (newlyDead) {
        const farewellText = getFarewellText(newlyDead.name);
        setFarewell(farewellText);
        }
    }, [wrongGuessCount]);

    React.useEffect(()=>{
        if(isGameWon||isGameFailed){
            setFarewell('')
        }
    },[isGameWon,isGameFailed])
    
    return(
        <>
            {farewell && !isGameFailed && !isGameWon &&(<section className="text-xl mt-6 rounded font-light ease-in-out bg-[#7B5EA6]/90 border-2 border-dashed py-1">
                <p className="text-white text-center my-6 italic">{farewell}<span className="not-italic"> 🫡</span></p>
            </section>)}
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
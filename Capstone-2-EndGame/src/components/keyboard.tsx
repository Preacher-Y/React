import { useLetterContext } from "../hooks/letterContext"

export default function Keyboard(){

    const {setLetter} = useLetterContext()

    function addGuessedLetter(letter:string):void{
        setLetter(prev=>[...prev,letter])
    }

    const keys = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()
    return (
        <section className="flex justify-center flex-wrap gap-2 mx-10 my-6">
            {keys.split('').map(el=>
                    <button 
                        key={el}
                        onClick={()=>addGuessedLetter(el)} 
                        className="w-14 h-14 rounded-md font-bold text-2xl place-self-center border border-spacing-10 border-white bg-yellow-500 text-[#333233] content-center">
                        {el}
                    </button>)}
        </section>
    )
}
import AllDices from "./allDices"

export default function Body({dice}:{dice:number[]}){
    return(
        <>
            <h1 className="text-center">
                Roll dice 
            </h1>
            <AllDices dice={dice}/>
        </>
    )
}
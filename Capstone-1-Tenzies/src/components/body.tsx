import AllDices from "./allDices"

export default function Body(){

    return(
        <>
            <p className="text-center font-medium">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls. 
            </p>
            <AllDices/>
        </>
    )
}
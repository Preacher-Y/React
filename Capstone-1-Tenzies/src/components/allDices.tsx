import Dices from "./dices";
export default function AllDices() {
    return(
        <div className="flex flex-col gap-6 ">
            <div className="flex justify-center gap-6">
                <Dices/>
                <Dices/>
                <Dices/>
                <Dices/>
                <Dices/>
            </div>
            <div className="flex justify-center gap-6">
                <Dices/>
                <Dices/>
                <Dices/>
                <Dices/>
                <Dices/>
            </div>
        </div>
    )
}
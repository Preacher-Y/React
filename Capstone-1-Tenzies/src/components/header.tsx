import { memo, type JSX } from "react"

function Header():JSX.Element{
    return(
        <>
            <header className="bg-white text-center pt-9">
                <h1 className="text-4xl">Tenzies</h1>
            </header>
        </>
    )
}
export default memo(Header)
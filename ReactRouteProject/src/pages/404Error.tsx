import { memo } from "react"
import { Link } from "react-router-dom"

function Error(){
    return(
        <div className="px-6 pt-32 w-full grid gap-6 text-center items-center">
            <h1 className="font-bold text-2xl">Sorry, the page you were looking for was not found.</h1>
            <Link to={'/'} className="bg-black mx-6 rounded-md text-white py-2">Return to Home</Link>
        </div>
    )
}

export default memo(Error)
import { memo } from "react"
import { useRouteError } from "react-router-dom"
import { FetchError } from "../type";

function Error(){

    const error = useRouteError() as FetchError;

    return(
        <div className="text-center min-h-screen flex flex-col gap-6 mx-6 place-items-center justify-center">
            <h1 className="font-bold text-4xl">{error.status}Error:</h1>
            <h1 className="font-bold text-2xl text-red-400">{error.message}</h1>
            <p className=" animate-pulse">{!error.message? `Due to:${error.statusText}` :'Try Refreshing the page <br/> Or <br/> contact the Management'} </p>
        </div>
    )
}

export default memo(Error)
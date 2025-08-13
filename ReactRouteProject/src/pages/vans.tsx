import { memo, useEffect } from "react"
import { Link } from "react-router-dom";
import type { VanType } from "../type";


function Vans({data,setData}:{data:VanType,setData:React.Dispatch<React.SetStateAction<VanType>>}){

    useEffect(()=>{
        const abort = new AbortController();
        (async () => {
            try {
                const response = await fetch('/api/vans',{signal:abort.signal})
                const json = (await response.json()) as {vans:VanType}
                setData(json.vans)
                
            } catch (error) {
                console.log(error);   
            }

        })()
        return ()=>abort.abort()
    },[])

    return(
        <div className="grid gap-4 px-6 mt-8">
            <h1 className=" text-2xl font-bold">Explore our van options</h1>
            <div className="flex items-center justify-between">
                <button className="bg-[#FFEAD0] px-4 py-1 font-semibold text-sm rounded-sm">
                    Simple
                </button>
                <button className="bg-[#FFEAD0] px-4 py-1 font-semibold text-sm rounded-sm">
                    Luxury
                </button>
                <button className="bg-[#FFEAD0] px-4 py-1 font-semibold text-sm rounded-sm">
                    Rugged
                </button>
                <button className="text-gray-700 text-sm ml-2 underline underline-offset-2 hover:text-red-700">
                    Clear filters
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 mb-12">
                {data.map(el=>(
                    <Link to={`/vans/${el.name.split(' ').join('')}`} key={el.id} className="rounded-lg hover:shadow-xl bg-white overflow-hidden">
                        <img src={el.imageUrl} alt={el.name} className="h-40 w-full object-cover" />
                        <div className="py-4 pb-4 px-4">
                            <div className="flex items-start justify-between">
                                <div className="-space-y-1">
                                    <h3 className="font-semibold">{el.name}</h3>
                                    <span
                                        className={[
                                        "mt-3 inline-block rounded px-3 py-1 text-xs text-white tracking-wide",
                                        el.type === "Simple" && "bg-[#E17654]",
                                        el.type === "Luxury" && "bg-black",
                                        el.type === "Rugged" && "bg-emerald-800"
                                        ]
                                        .filter(Boolean)
                                        .join(" ")}
                                    >
                                        {el.type}
                                    </span>
                                </div>
                                <p className="text-right grid -space-y-1">
                                    <span className="font-bold">${el.price}</span>
                                    <span className="text-sm text-gray-500">/day</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default memo(Vans)
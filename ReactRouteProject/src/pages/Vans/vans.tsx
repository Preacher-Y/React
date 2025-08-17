import { memo } from "react"
import { Link, useSearchParams } from "react-router-dom";
import type { VanType } from "../../type";


function Vans({data}:{data:VanType}){

    const [searchType, setSearchType] = useSearchParams()

    const typeFilter = searchType.get("type")

    const displayedData = typeFilter? data.filter(el=> el.type === typeFilter) :data

    return(
        <div className="grid gap-4 px-6 mt-8">
            <h1 className=" text-2xl font-bold">Explore our van options</h1>
            <div className="flex items-center justify-between">
                <button onClick={()=>setSearchType({type:'Simple'})} className="bg-[#FFEAD0] hover:bg-[#E17654] hover:text-white px-4 py-1 font-semibold text-sm rounded-sm transition-all duration-400 ease-in-out">
                    Simple
                </button>
                <button onClick={()=>setSearchType({type:'Luxury'})} className="bg-[#FFEAD0] hover:bg-black hover:text-white px-4 py-1 font-semibold text-sm rounded-sm transition-all duration-400 ease-in-out">
                    Luxury
                </button>
                <button onClick={()=>setSearchType({type:'Rugged'})} className="bg-[#FFEAD0] hover:bg-emerald-800 hover:text-white px-4 py-1 font-semibold text-sm rounded-sm transition-all duration-400 ease-in-out">
                    Rugged
                </button>
                <button onClick={()=>setSearchType({})} className="text-gray-700 text-sm ml-2 underline underline-offset-2 hover:text-red-700">
                    Clear filters
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4 mb-12">
                {displayedData.map(el=>(
                    <Link to={`${el.name.split(' ').join('')}`} key={el.id} className="rounded-lg hover:shadow-xl bg-white overflow-hidden">
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
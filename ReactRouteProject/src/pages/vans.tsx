import { memo, useEffect, useState } from "react"

type VanType = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: "simple" | "luxury" | "rugged";
};


function Vans(){

    const [data, setData]=useState<VanType[]>([])

    useEffect(()=>{
        const abort = new AbortController();
        (async () => {
            try {
                const response = await fetch('/api/vans',{signal:abort.signal})
                const json = (await response.json()) as {vans:VanType[]}
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
                <button className="bg-[#FFEAD0] px-4 py-1 text-sm rounded-sm">
                    Simple
                </button>
                <button className="bg-[#FFEAD0] px-4 py-1 text-sm rounded-sm">
                    Luxury
                </button>
                <button className="bg-[#FFEAD0] px-4 py-1 text-sm rounded-sm">
                    Rugged
                </button>
                <button className="text-gray-700 text-sm ml-2 underline underline-offset-2 hover:text-red-700">
                    Clear filters
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {data.map(el=>(
                    <article key={el.id} className="rounded-lg bg-white overflow-hidden">
                        <img src={el.imageUrl} alt={el.name} className="h-40 w-full object-cover" />
                        <div className="p-4 grid">
                            <div className="flex items-start justify-between">
                                <h3 className="font-semibold">{el.name}</h3>
                                <p className="text-right">
                                <span className="font-bold">${el.price}</span>
                                <span className="text-sm text-gray-500">/day</span>
                                </p>
                            </div>
                            <span
                                className={[
                                "mt-3 inline-block rounded px-2 py-0.5 text-xs uppercase tracking-wide",
                                el.type === "simple" && "bg-amber-100 text-amber-800",
                                el.type === "luxury" && "bg-purple-100 text-purple-800",
                                el.type === "rugged" && "bg-emerald-100 text-emerald-800"
                                ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                                {el.type}
                            </span>
                            </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default memo(Vans)
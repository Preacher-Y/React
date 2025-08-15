import { memo } from "react";
import { Link,useParams } from "react-router-dom";

import type { VanType } from "../../type";

function VanDetails({data}:{data:VanType}){

    const name = useParams()

    return(
        <div className="max-sm:px-32 h-full px-6 my-8 mb-18 grid gap-4">
            <Link to="/vans" className="text-black/60 text-sm flex items-center gap-1 underline underline-offset-2 ">
                <span className="icon-[material-symbols--arrow-left-alt]"/>
                Back to vans
            </Link>
            
            {data.map(el=>el.name.split(' ').join('')==name.name? 
                (<div key={el.id} className="grid space-y-4">
                    <img src={el.imageUrl} alt={el.name} className="w-full h-110"/>
                    <span
                        className={[
                        "mt-3 inline-block rounded px-4 py-1 mr-auto text-sm text-white tracking-wide",
                        el.type === "Simple" && "bg-[#E17654]",
                        el.type === "Luxury" && "bg-black",
                        el.type === "Rugged" && "bg-emerald-800"
                        ]
                        .filter(Boolean)
                        .join(" ")}
                    >{el.type}</span>
                    <h1 className="font-bold text-3xl">{el.name}</h1>
                    <h2 className="text-sm"><span className="font-bold text-[20px]">${el.price}</span>/day</h2>
                    <p className="font-semibold">{el.description}</p>
                    <button className="bg-amber-500 rounded-md text-white py-2 font-semibold">
                        Rent this van
                    </button>
                </div>):'')
            }
        </div>
    )
}
export default memo(VanDetails);
import { memo } from "react";
import { Link,useParams,useLocation } from "react-router-dom";

import type { VanType } from "../../type";
import clsx from "clsx";

function VanDetails({data}:{data:VanType}){

    const {name} = useParams()
    const {state,search} = useLocation()

    return(
        <div className="max-sm:px-32 h-full px-6 my-8 mb-18 grid gap-4">
            <Link to={`..${search==''?`?${state?.search|| ''}`:`${search}&${state.search}`}`} relative="path" className="text-black/60 text-sm flex items-center gap-1 underline underline-offset-2 ">
                <span className="icon-[material-symbols--arrow-left-alt]"/>
                Back to vans
            </Link>
            
            {data.map(el=>el.name.split(' ').join('')==name&& 
                (<div key={el.id} className="grid space-y-4">
                    <img src={el.imageUrl} alt={el.name} className="w-full h-110"/>
                    <span
                        className={clsx(
                        "mt-3 inline-block rounded px-4 py-1 mr-auto text-sm text-white tracking-wide",
                        {"bg-[#E17654]" : el.type === "Simple",
                         "bg-black" :el.type === "Luxury",
                        "bg-emerald-800":el.type === "Rugged" 
                        })}
                    >{el.type}</span>
                    <h1 className="font-bold text-3xl">{el.name}</h1>
                    <h2 className="text-sm"><span className="font-bold text-[20px]">${el.price}</span>/day</h2>
                    <p className="font-semibold">{el.description}</p>
                    <button className="bg-amber-500 rounded-md text-white py-2 font-semibold">
                        Rent this van
                    </button>
                </div>))
            }
        </div>
    )
}
export default memo(VanDetails);
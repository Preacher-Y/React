import { memo } from "react"
import { useOutletContext } from "react-router-dom"

type van = {
  id: string;
  name: string;
  description:string;
  price: number;
  imageUrl: string;
  type: "Simple" | "Luxury" | "Rugged";
}

function Details(){
    const {van} = useOutletContext<{van:van}>()

    return (
        <div className="grid gap-3 text-lg text-gray-800">
           <h1><span className="font-bold text-stone-900">Name:</span> {van.name}</h1> 
           <h1><span className="font-bold text-stone-900">Category:</span> {van.type}</h1>
           <p><span className="font-bold text-stone-900">Description:</span> {van.description}</p> 
           <h1><span className="font-bold text-stone-900">Visibility:</span> Public</h1>
        </div>
    )
}

export default memo(Details)
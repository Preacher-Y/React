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

function Pricing(){
    const {van} = useOutletContext<{van:van}>()

    return (
       <h1 className="text-stone-700"><span className="font-bold mt-8 text-2xl text-stone-900">{`$${(van.price).toFixed(2)}`}</span>/day</h1> 
    )
}

export default memo(Pricing)
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

function Pic(){
    const {van} = useOutletContext<{van:van}>()

    return (
        <img src={van.imageUrl} alt={van.name} className="h-20 w-20 rounded-lg mt-4" />
    )
}

export default memo(Pic)
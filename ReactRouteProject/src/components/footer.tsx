import { memo } from "react"

function Footer(){
    return(
        <footer className="bg-[#252525] text-center py-4">
            <p className="text-sm text-gray-400">Ⓒ 2022 #VANLIFE</p>
        </footer>
    )
}

export default memo(Footer)
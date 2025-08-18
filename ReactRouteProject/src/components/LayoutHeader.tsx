import Header from "./header"
import Footer from "./footer"

import { memo } from "react"
import { Outlet,useNavigation } from "react-router-dom"

function Layout() {

    const nav = useNavigation()

    return (
        <div className="flex flex-col min-h-screen">

            <Header />

            <main className="flex-grow">
                {nav.state !== 'idle'?(<div className="grid place-items-center text-center mt-32 h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"/>
                    <p className="animate-pulse -mt-32 ml-2">Loading ...</p>
                </div>): <Outlet />}
            </main>

            <Footer />
        </div>
    )
}

export default memo(Layout)

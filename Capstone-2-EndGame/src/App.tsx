import { memo } from "react"
import Hero from "./components/hero"
import LanguagesCards from "./components/languageCards"


function App() {

  return (
    <>
      <Hero/>
      <LanguagesCards/>
    </>
  )
}

export default memo(App)

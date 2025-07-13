import './App.css'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import {IngredientsProvider} from './components/context'

function App() {

  return (
    <>
      <Header />
      <IngredientsProvider>
        <Body />
      </IngredientsProvider>
      <Footer />
    </>
  )
}

export default App

import './App.css'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import {IngredientsProvider} from './components/ingredientsContext'
import { RecipeProvider } from './components/recipeContext'

export default function App() {

  return (
    <>
      <Header />
      <IngredientsProvider>
        <RecipeProvider>
          <Body />
        </RecipeProvider>
      </IngredientsProvider>
      <Footer />
    </>
  )
}
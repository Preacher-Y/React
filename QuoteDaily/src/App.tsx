import { useState } from "react"
import quotes from  "./qoutes"
import clsx from 'clsx'
function App() {

  const [currentQuoteNum, setCurrentQuoteNum] = useState(0)
  const arrOfQuoteElements = quotes.map(quote=>(
    <div className="w-md mx-auto grid gap-4 justify-center">
      <p className="bg-blue-200 rounded-full mx-auto px-2 py-0.5 text-xs text-blue-900 w-32  font-semibold">{quote.category}</p>
      <p className="text-2xl text-[#324356]">{quote.quote}</p>
      <p className="italic text-[#4C545C] font-semibold">- {quote.author}</p>
      <p>{}</p>
    </div>
  ))

  function handlePrevious(){
    if(currentQuoteNum!==0){
      setCurrentQuoteNum(prevQuoteNum=>prevQuoteNum-1)
    }
  }
  function handleNext(){
    if(currentQuoteNum<=arrOfQuoteElements.length){
      setCurrentQuoteNum(prevQuoteNum=>prevQuoteNum+1)
    }
  }
  return (
    <div className="bg-white w-full rounded-lg py-8 px-6 space-y-4">
      <div className="flex items-center text-center justify-center gap-2">
        <span className="icon-[ph--quotes-light] text-3xl"/>
        <h1 className="text-2xl font-bold" >Daily Quotes</h1>
      </div>

      {arrOfQuoteElements[currentQuoteNum]}

      <div className="flex justify-between items-center pt-6">
        <button onClick={handlePrevious} disabled={currentQuoteNum === 0} className={clsx("ring px-4 py-2 rounded-lg ring-gray-200 ",{"":currentQuoteNum!==0, "cursor-not-allowed":currentQuoteNum===0})}>
          <h1 className="text-gray-500 text-sm">{'< Previous'}</h1>
        </button>
        <p className="text-gray-400">{`${currentQuoteNum} of ${arrOfQuoteElements.length}`}</p>
        <button onClick={handleNext} disabled={currentQuoteNum>=9} className={clsx("ring px-4 py-2 rounded-lg ring-gray-200 ",{"":currentQuoteNum!==0, "cursor-not-allowed":currentQuoteNum>=9})}>
          <h1 className="text-gray-500 text-sm">{'Next >'}</h1>
        </button>
      </div>
    </div>
  );
}

export default App;

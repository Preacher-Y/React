import Header from './components/header';
import Body from './components/body';
import { todoContext } from './hooks/listContext';
import { useState } from 'react';
import Results from './components/results';
import Confetti from 'react-confetti'

function App() {
  const [todo,setTodo] = useState<string[]>([])
  return (
    <>
      <todoContext.Provider value={{todo,setTodo}}>
        <Header/>
        <Body/>
        <Results/>
      </todoContext.Provider>
    </>
  );
}

export default App;

import Header from './components/header';
import Landing from './pages/landing';

import React from 'react';

function App() {
  const [isDisplayed, setIsDisplayed] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsDisplayed(true);
    }, 5000);
  }, []);
  return (
    <>
      {!isDisplayed ? (<Landing/>) :
        (<>
          <Header/>
          <div className="text-center mt-20 text-3xl font-bold text-blue-600">
              Tailwind 4 + Vite
          </div>
        </>)}
    </>
  );
}

export default App;

import { memo, useState } from 'react';
import Body from './components/body';
import Chat from './components/chat';
import Header from './components/header';
import SideBar from './components/sideBar';
import { openContext } from './hooks/openContext';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>  
      <openContext.Provider value={{ isOpen, setIsOpen }}>
        <Header/>
        <SideBar/>
      </openContext.Provider>
        <Body/>
        <Chat/>
    </>
  );
}

export default memo(App);

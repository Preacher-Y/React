import { memo, useState } from 'react';
import Body from './components/body';
import Chat from './components/chat';
import Header from './components/header';
import SideBar from './components/sideBar';
import { openContext } from './hooks/openContext';
import { open2Context } from './hooks/open2Context';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>  
      <openContext.Provider value={{ isOpen, setIsOpen }}>
      <open2Context.Provider value={{ isOpen2, setIsOpen2 }}>
        <Header/>
        <SideBar/>
      </open2Context.Provider>
      </openContext.Provider>
        <Body/>
        <Chat/>
    </>
  );
}

export default memo(App);

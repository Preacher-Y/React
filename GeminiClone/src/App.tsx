import { memo, useState } from 'react';
import Body from './components/body';
import Chat from './components/chat';
import Header from './components/header';
import SideBar from './components/sideBar';
import { openContext } from './hooks/openContext';
import { open2Context } from './hooks/open2Context';
import { searchContext } from './hooks/searchContext';
import { open3Context } from './hooks/open3Context';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  return (
    <open3Context.Provider value={{ isOpen3, setIsOpen3 }}>
    <searchContext.Provider value={{ isSearchClicked, setIsSearchClicked }}>  
      <openContext.Provider value={{ isOpen, setIsOpen }}>
      <open2Context.Provider value={{ isOpen2, setIsOpen2 }}>
        <Header/>
        <SideBar/>
      </open2Context.Provider>
      </openContext.Provider>
        <Body/>
        <Chat/>
    </searchContext.Provider>
    </open3Context.Provider>
  );
}

export default memo(App);

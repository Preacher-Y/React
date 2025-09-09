import { memo, useState } from 'react';
import Body from './components/body';
import Chat from './components/chat';
import Header from './components/header';
import SideBar from './components/sideBar';
import OpenContextProvider from './hooks/openContext';
import { openModelContext } from './hooks/openModelContext';
import { searchContext } from './hooks/searchContext';
import { openSettingsContext } from './hooks/openSettingsContext';
import { openThreeDotsContext } from './hooks/openThreeDotsContext';

function App() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isThreeDotsClicked,setIsThreeDotsClicked] = useState(false);

  return (
    <openThreeDotsContext.Provider value={{ isThreeDotsClicked, setIsThreeDotsClicked }}>
    <openSettingsContext.Provider value={{ isOpenSettings, setIsOpenSettings }}>
    <searchContext.Provider value={{ isSearchClicked, setIsSearchClicked }}>  
      <OpenContextProvider>
      <openModelContext.Provider value={{ isOpenModel, setIsOpenModel }}>
        <Header/>
        <SideBar/>
      </openModelContext.Provider>
      </OpenContextProvider>
        <Body/>
        <Chat/>
    </searchContext.Provider>
    </openSettingsContext.Provider>
    </openThreeDotsContext.Provider>
  );
}

export default memo(App);

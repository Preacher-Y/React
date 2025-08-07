import { memo } from 'react';
import { useSearchContext } from '../hooks/searchContext';
import SearchPage from '../pages/searchPage';

function Body() {

  const {isSearchClicked} = useSearchContext();

  if (isSearchClicked) {
    return <SearchPage />;
  }
  
  return (
    <>
        <h1 className="text-center h-screen transition-all duration-300 pb-18 pl-20 ease-in-out content-center text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-400 to-white bg-clip-text text-transparent">
            Hello, Sheja
        </h1>
    </>
  );
}

export default memo(Body);
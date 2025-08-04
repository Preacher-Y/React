import { memo } from 'react';
function Body() {
  return (
    <>
        <h1 className="text-center h-screen content-center text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-400 to-white bg-clip-text text-transparent">
            Hello, Sheja
        </h1>
    </>
  );
}

export default memo(Body);
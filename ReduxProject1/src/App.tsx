import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Header from './components/Login';
import Profile from './components/Profile';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Outlet/>}>
      <Route index element={<Header/>}/>
      <Route path='profile' element={<Profile/>}/>
    </Route>
  ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;

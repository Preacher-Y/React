import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router-dom';
import Header from './components/Login';
import Profile from './components/Profile';
import { action } from './utilit';

function ProtectedRoute({ children }: { children: React.JSX.Element }) {
  const isLoggedIn = localStorage.getItem('LoggedInRedux')?.toLowerCase() === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ message: "You must first Login " }} replace />
  }
  return children;
}




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Outlet/>}>
      <Route index element={<Header/>} action={action}/>
      <Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    </Route>
  ))

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;

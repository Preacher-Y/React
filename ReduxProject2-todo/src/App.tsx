import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import TodoPage from "./pages/todoListPage";
import Header from "./components/header";
import FetchUserPage from "./pages/fetchUserPage";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<><Header/><Outlet /></>}>
      <Route path="*" element={<h1>404</h1>} />
      
      <Route index element={<TodoPage/>} />
      <Route path="fetch" element={<FetchUserPage/>} />
      
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

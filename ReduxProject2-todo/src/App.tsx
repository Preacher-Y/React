import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import TodoPage from "./pages/todoListPage";
import Header from "./components/header";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<><Header/><Outlet /></>}>
      <Route index element={<TodoPage/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

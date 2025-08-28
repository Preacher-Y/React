import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import TodoPage from "./pages/todoListPage";
import Header from "./components/header";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<><Header/><Outlet /></>}>
      <Route index element={<TodoPage/>} />
      <Route path="fetch" element={<h1>fetch</h1>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  );
}

export default App;

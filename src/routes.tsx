import type { RouteObject } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/notFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <TodoList />,
    children: [],
  },
  {
    path: "/Register",
    element: <Register />,
    children: [],
  },
  {
    path: "/Login",
    element: <Login />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;

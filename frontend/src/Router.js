import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Auth } from "./components/Auth";
import { ListaPasta } from "./components/ListaPasta";

export const router = createBrowserRouter([
  {
    path: "/arquivos",
    element: <Home />,
  },
  {
    path: "/pastas",
    element: <ListaPasta />,
  },
  {
    path: "/",
    element: <Auth />,
  },
]);

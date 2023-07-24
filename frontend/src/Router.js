import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/PaginaArquivos/Home";
import { Auth } from "./components/Auth/Auth";
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

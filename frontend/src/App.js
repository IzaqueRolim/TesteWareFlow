import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";
import { Home } from "./components/Home";
import { Auth } from "./components/Auth";
import { ListaPasta } from "./components/ListaPasta";
import { Header } from "./components/Header";
import Routes, { router } from "./Router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   {/* <Header nomeUsuario={"Izaque Rolim"} /> */}
    //   {/* <Home /> */}
    //   {/* <Auth /> */}
    //   <ListaPasta />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;

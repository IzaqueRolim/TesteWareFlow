import "./App.css";
import React, { useState, useEffect } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";
import { Home } from "./pages/PaginaArquivos/Home";
import { arquivoComponent } from "./components/ArquivoComponent";
import { Auth } from "./components/Auth"; 
import { ListaPasta } from "./components/ListaPasta";
import { Header } from "./components/Header";
import Routes, { router } from "./Router";
import { RouterProvider } from "react-router-dom";
function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula um carregamento assíncrono
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  }, []);

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

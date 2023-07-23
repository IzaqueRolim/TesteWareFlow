import "./App.css";
import React, { useState, useEffect } from 'react';

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";
import { Home } from "./components/Home";
import { arquivoComponent } from "./components/ArquivoComponent";
import { Auth } from "./components/Auth"; 
import { ListaPasta } from "./components/ListaPasta";
import { Header } from "./components/Header";


function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula um carregamento assíncrono
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  }, []);

  return (
    <div className="App">
      <div className={`content ${showContent ? 'fade-in' : ''}`}>
        {/* <Header nomeUsuario={"Izaque"} /> */}
        <Home />
        {/* <Auth /> */}
        {/* <ListaPasta /> */}
      </div>
    </div>
  );
}

export default App;

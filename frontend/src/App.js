import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";
import { Home } from "./components/Home";
import { Auth } from "./components/Auth";
import { ListaPasta } from "./components/ListaPasta";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header nomeUsuario={"Izaque Rola"} />
      {/* <Home /> */}
      {/* <Auth /> */}
      <ListaPasta />
    </div>
  );
}

export default App;

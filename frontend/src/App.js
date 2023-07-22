import logo from "./logo.svg";
import "./App.css";
import { FileUpload } from "primereact/fileupload";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";

import { Auth } from "./components/Auth";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        {/* <FileUploadDemo/> */}
        <Auth />
      </div>
    </div>
  );
}

export default App;

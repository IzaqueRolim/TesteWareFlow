import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { FileUploadDemo } from "./components/FileUpload";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Home />
        {/* <Auth/> */}
      </div>
    </div>
  );
}

export default App;

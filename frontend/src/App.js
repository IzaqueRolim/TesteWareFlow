import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "./App.css";

import { Auth } from "./components/Auth";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        {/* <Auth /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;

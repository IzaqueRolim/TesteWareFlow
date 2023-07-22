import logo from './logo.svg';
import './App.css';
import { FileUpload } from 'primereact/fileupload';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   


// import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { FileUploadDemo } from './components/FileUpload';
import { Input } from '@mui/material';
import { Auth } from './components/Auth';
import { ListaPasta } from './components/ListaPasta';

function App() {
  const [state, setState] = useState();
  return (
    <div className="App">
       <div className="conteiner">

{/* <Dialog visible={state} onHide={() => setState(false)}>
    // content
    </Dialog>

<Button label="Show" onClick={() => setState(true)} /> */}

<FileUploadDemo/>
{/* <Auth/> */}
    </div>
      <ListaPasta/>
 
    </div>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { FileUpload } from 'primereact/fileupload';


function App() {
  return (
    <div className="App">
        <FileUpload name="demo" url="./upload"></FileUpload>
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000}/>

    </div>
  );
}

export default App;

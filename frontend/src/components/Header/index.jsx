import { useNavigate } from "react-router-dom";
import { Foto } from "../Foto/index";
import "./style.css";

export const Header = (props) => {
  const primeiraLetra = props.nomeUsuario.slice(0, 1);
  const navigate = useNavigate();

  const logout = () => {
    console.log("log");
    navigate("/");
  };

  return (
    <div className="header">
      <h1>Bem vindo, {props.nomeUsuario}</h1>
      <div className="header-icones">
        <Foto>{primeiraLetra}</Foto>
        <span class="pi pi-sign-out" onClick={logout}></span>
      </div>
    </div>
  );
};

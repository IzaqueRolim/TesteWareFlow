import { useNavigate } from "react-router-dom";
import { Foto } from "../Foto/index";
import "./style.css";
import { Typography } from "@mui/material";

export const Header = (props) => {
  const primeiraLetra = props.nomeUsuario.slice(0, 1);
  const navigate = useNavigate();

  const logout = () => {
    console.log("log");
    navigate("/");
  };

  return (
    <div className="header">
      <Typography
        variant="h1"
        sx={{
          color: "#5E2D95",
          fontSize: 22,
          marginLeft: "20px",
        }}
      >
        Bem vindo, {props.nomeUsuario}
      </Typography>
      <div className="header-icones">
        <Foto>{primeiraLetra}</Foto>
        <span
          class="pi pi-sign-out"
          style={{ fontSize: "22px", color: "#5E2D95" }}
          onClick={logout}
        ></span>
      </div>
    </div>
  );
};

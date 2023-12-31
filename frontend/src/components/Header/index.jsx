import { useNavigate } from "react-router-dom";
import { Foto } from "../Foto/index";
import "./style.css";
import { Typography } from "@mui/material";
import { useState } from "react";
import { PeopleAcess } from "../PeopleAcess";
import { hover } from "@testing-library/user-event/dist/hover";

export const Header = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  //const primeiraLetra = props.nomeUsuario.slice(0, 1);
  const navigate = useNavigate();

  const logout = () => {
    console.log("log");
    localStorage.setItem("idUsuario","")
    localStorage.setItem("id_pasta","")
    navigate("/");
  };
  

  return (
    <div className="header">
      <div onClick={()=>{navigate("/pastas")}}>
        <Typography
          variant="h1"
          sx={{
            color: "#5E2D95",
            fontSize: 22,
            marginLeft: "20px",
            cursor:"pointer"
          }}
          >
          {props.titulo}
          
        </Typography>
      </div>
      
      {props.isPageFile?
      <div
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        className="header-icones">
          {/* <Foto color={"purple"}>{primeiraLetra}</Foto> */}
          {
              props.usuarios.length>0?
              props.usuarios.map((element,index)=>(
                <Foto color={"#2c3ea8"} key={index}>{element.nomeUsuario}</Foto>
              )):<></>
          }
          <span
            class="pi pi-sign-out"
            style={{ fontSize: "22px", color: "#5E2D95" }}
            onClick={logout}
          ></span>
        {
          isHovered?
          <PeopleAcess 
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)} 
            nomeClasse = {isHovered?"people":"people"}usuarios={props.usuarios} /> :
          <></>
        }
      </div>:<>
      </>}
    </div>
  );
};

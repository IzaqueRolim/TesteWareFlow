import iconPasta from "../../assets/iconPasta.png";
import "./style.css";

export const PastaComponent = (props) => {
  return (
    <button onClick={props.funcao} className="divPasta">
      <img src={iconPasta} />
      <span>{props.nomePasta}</span>
    </button>
  );
};

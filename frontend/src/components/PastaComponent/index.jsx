import iconPasta from "../../assets/iconPasta.png";
import "./style.css";

export const PastaComponent = (props) => {
  return (
    <div className="divPasta">
      <img src={iconPasta} />
      <span>{props.nomePasta}</span>
    </div>
  );
};

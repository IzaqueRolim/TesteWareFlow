import { PastaComponent } from "../PastaComponent";
import { BotaoAdicionarPasta } from "../BotaoAdicionarPasta";
import "./style.css";
export const ListaPasta = () => {
  return (
    <div className="listaPasta">
      <PastaComponent nomePasta="Pasta 1" />
      <PastaComponent nomePasta="Pasta 2" />
      <PastaComponent nomePasta="Pasta 3" />
      <PastaComponent nomePasta="Pasta 4" />
      <PastaComponent nomePasta="Pasta 5" />
      <PastaComponent nomePasta="Pasta 5" />
      <PastaComponent nomePasta="Pasta 5" />
      <PastaComponent nomePasta="Pasta 5" />
      <PastaComponent nomePasta="Pasta 5" />
      <PastaComponent nomePasta="Pasta 5" />

      <BotaoAdicionarPasta />
    </div>
  );
};

import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import "../../styles/custompanel.css";
import "./style.css";

import { FormsLogin } from "../FormsLogin";
import { FormsCadastro } from "../FormsCadastro";
export const Auth = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="login">
      <div className="containerSwitch">
        <p>Login</p>
        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        <p>Cadastro</p>
      </div>
      <div className={`card ${checked ? "flipped" : ""}`}>
        <div className="card-inner">
          <div className="card-front">
            <FormsLogin checked={checked} />
          </div>
          <div className="card-back">
            <FormsCadastro />
          </div>
        </div>
      </div>
    </div>
  );
};

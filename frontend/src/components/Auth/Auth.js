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
      <div>
         <InputSwitch
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
      </div>
      <div className={`card ${checked ? 'flipped' : ''}`} onClick={()=>setChecked(!checked)}>
        <div className="card-inner">
            <div className="card-front">
              <FormsLogin />
            </div>
            <div className="card-back">
              <FormsCadastro /> 
            </div>
          </div>
      </div>
    </div>
   
  );
};

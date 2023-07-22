import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import "../styles/custompanel.css";

import { FormsLogin } from "./FormsLogin";
import { FormsCadastro } from "./FormsCadastro";
export const Auth = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="login">
      <div className="card">
        <div>
          <InputSwitch
            checked={checked}
            onChange={(e) => setChecked(e.value)}
          />
        </div>
        {checked ? <FormsCadastro /> : <FormsLogin />}
      </div>
    </div>
  );
};

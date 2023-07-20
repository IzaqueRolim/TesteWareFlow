import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import '../styles/custompanel.css';

import { FormsLogin } from './FormsLogin';
import { FormsCadastro } from './FormsCadastro';
export const Auth = () => {
    const [checked1, setChecked1] = useState(false);

    return(
        <div className="login">
             <div>
            <div className="card">
             
                <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} />

            </div>
        </div>
        {checked1?( <FormsCadastro/>):(<FormsLogin/>)}
           
           
            </div>
    )
}
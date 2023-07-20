import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Box, Paper } from '@mui/material';
import { Button } from 'primereact/button';


export const FormsLogin = ()=>{
    const [value3, setValue3] = useState('');
    const [checked, setChecked] = useState(false);
    return(
     
       <Paper elevation={3} sx={{height: "50vh", width: "25vw",
            display: "flex", flexDirection: "column", gap:3, alignItems: "center", justifyContent:"center" }}>


        

         
        <div>

                <span className="p-input-icon-left">
                    <i className="pi pi-user" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Username" />
                </span>
        </div>
        <div>

                <span className="p-input-icon-left">
                    <i className="pi pi-shield" />
                    <InputText value={value3} onChange={(e) => setValue3(e.target.value)} placeholder="Password" />
                </span>
        </div>
               
                <div className="field-checkbox">
                    <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                    <label htmlFor="binary">Remember Me</label>
                </div>
                <Button label="Entrar" aria-label="Submit"  />
                </Paper>
       
    );
}
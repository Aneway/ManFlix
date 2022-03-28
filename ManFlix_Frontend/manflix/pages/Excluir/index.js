import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


export default function Excluir() {

    const [formData, setFormData] = useState();
    const [filme, setFilme] = useState([]); 
    const [placeholder, setPlaceholder] = useState('Selecione...')

    function handleForm(event){
        const {name, value} = event.target;
        setFormData((prevState) => 
         ({
           ...prevState,
           [name]: value.id,
         }), 
       );
     }

   
    useEffect(async ()=>{ 
        const response2 = await fetch(`http://127.0.0.1:8000/filme/`);
        const filme=await response2.json(); 
        setFilme(filme);
    },[]);


    async function deletar(e){
        e.preventDefault();
        await fetch(`http://127.0.0.1:8000/filme/${formData}/`, {
        method: 'DELETE',
        })
    }

    return(
        <div>
                <Head>
                    <title>ManFlix | Delete </title>
                </Head>
            <form>
            <h1>Excluir filme</h1>
                <div className="field">
                    <span className="p-float-label">
                        <Dropdown
                            id="filme"
                            name="filme"
                            options={filme}
                            optionValue="id"
                            optionLabel="nome"
                            onChange={(e) => setFormData(e.value)}
                            value={formData}          
                            placeholder={placeholder}   
                        >
                        </Dropdown>
                    </span>
                </div>
                <Button label="Excluir" onClick={(e)=> deletar(e)}></Button>
            </form>
        </div>

    )
}


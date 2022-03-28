import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Head from "next/head";

export default function CadastrarUser() {

    const [assinatura, setAssinatura] = useState([]);
    const [isPending, setIsPending] = useState(false);
    // const [selectedFilme, setSelectedFilme] = useState();
    const [placeholder, setPlaceholder] = useState('Selecione...')
    const [formData, setFormData] = useState(
      {
        id: '',
		    nome: '',
		    email: '',
		    assinaturaFk: ''
      }
    );

    
  
  async function getAssinatura(){
    const response = await fetch(`http://127.0.0.1:8000/assinatura/`);
  
    //converter a resposta do formulario para json:
    const data = await response.json();
    setAssinatura(data);
  }

  ////////////////////////////////////////////////////////////////////////////
    function handleForm(event){
        const {name, value} = event.target;
        setFormData((prevState) => 
        ({
        ...prevState,
        [name]: value,
        }), 
    );
    }

    function handleForm2(event){
    const {name, value} = event.target;
    setFormData((prevState) => 
        ({
        ...prevState,
        [name]: value.id,
        }),
    );
    setPlaceholder(value.nome)
}
 /////////////////////////////////////////////////////////////////////////////
 
 function SalvarUsuario(){
   event.preventDefault();
   setIsPending(true);
   fetch('http://127.0.0.1:8000/usuarios/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify([formData]),
 }).then(() => { 
   console.log('user cadastrado');
   // console.log(formData);
   setIsPending(false); 
 
 })
 }

 ///////////////////////////////////////////////////////////////////////////
 return (
    <div>
      <Head>
        <title>ManFlix | Us</title>
      </Head>
      <h1>Cadastro de Usuário</h1>
      <h3>Nome</h3>
      <InputText
        id="nome"
        name="nome"
        onChange={(e) => handleForm(e)}
        value={formData.nome}
      />
      <h3>E-mail</h3>
      <InputText
        id="email"
        name="email"
        onChange={(e) => handleForm(e)}
        value={formData.email}
      />
        <h3>Assinatura desejada</h3>
      <Dropdown
        id="assinaturaFk" //apenas para css
        name="assinaturaFk"
        optionLabel="nome" //pra saber qual dado vou pegar!
        options={assinatura} // AQUI É PRA PEGAR TUDO Q TEM DENTRO DO REPOSITORIO! Mas como a gente escolheu optionLabel=name, a gente só vai pegar as informacoes de nome
        onShow={() => getAssinatura()}
        onChange={(e) => handleForm2(e,e.target.value.id)}
        value={assinatura.id}
        placeholder={placeholder}
      /><br></br><br></br>
      { !isPending && <Button label="Cadastrar" onClick={(e)=>SalvarUsuario(e)} />}
      { isPending && <Button label="Cadastrando..." onClick={(e)=>SalvarUsuario(e)} />}

    </div>
  )
}








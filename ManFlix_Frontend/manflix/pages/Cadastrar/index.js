import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Head from "next/head";

export default function Cadastrar() {

  const [categoria, setCategoria] = useState([]);
  const [isPending, setIsPending] = useState(false);
  // const [selectedFilme, setSelectedFilme] = useState();
  const [placeholder, setPlaceholder] = useState('Selecione...')
  const [formData, setFormData] = useState(
    {
      nome: '',
      ano_lancamento: '',
      categoriaFk: ''
    }
  );
  

async function getCategoria(){
  const response = await fetch(`http://127.0.0.1:8000/categoria/`);

  //converter a resposta do formulario para json:
  const data = await response.json();
  setCategoria(data);
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
  
  function SalvarFilme(){
    event.preventDefault();
    setIsPending(true);
    fetch('http://127.0.0.1:8000/filme/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([formData]),
  }).then(() => { 
    console.log('filme cadastrado');
    // console.log(formData);
    setIsPending(false); 
  
  })
  }

  ///////////////////////////////////////////////////////////////////////////

    return (
      <div>
        <Head>
          <title>ManFlix | Register</title>
        </Head>
        <h1>Cadastre de Filme</h1>
        <form>
          <h3>Nome do Filme</h3>
          <InputText
            id="nome"
            name="nome"
            onChange={(e) => handleForm(e)}
            value={formData.nome}
          />
          <h3>Ano de lançamento</h3>
          <InputText
            id="ano_lancamento"
            name="ano_lancamento"
            onChange={(e) => handleForm(e)}
            value={formData.ano_lancamento}
          />
            <h3>Gênero</h3>
          <Dropdown
            id="categoriaFk" //apenas para css
            name="categoriaFk"
            optionLabel="nome" //pra saber qual dado vou pegar!
            options={categoria} // AQUI É PRA PEGAR TUDO Q TEM DENTRO DO REPOSITORIO! Mas como a gente escolheu optionLabel=name, a gente só vai pegar as informacoes de nome
            onShow={() => getCategoria()}
            onChange={(e) => handleForm2(e,e.target.value.id)}
            value={categoria.id}
            placeholder={placeholder}
          /><br></br><br></br>
          { !isPending && <Button label="Cadastrar" onClick={(e)=>SalvarFilme(e)} />}
          { isPending && <Button label="Cadastrando..." onClick={(e)=>SalvarFilme(e)} />}
        </form>
      </div>
    )
  }
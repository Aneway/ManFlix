import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function Favoritos() {

    const [filme, setFilme] = useState([]); 
    const [usuario, setUsuario] = useState([]); 
    const [isPending, setIsPending] = useState(false);
    const [placeholder, setPlaceholder] = useState('Selecione...')
    const [placeholder2, setPlaceholder2] = useState('Selecione...')
    const [formData, setFormData] = useState(
        {

          filmeFk: '',
          usuarioFk: '',
        }
      );


      async function getUsuario(){
        const response = await fetch(`http://127.0.0.1:8000/usuarios/`);
      
        const data = await response.json();
        setUsuario(data);
        console.log(data);
      }

      async function getFilmes(){
        const response = await fetch(`http://127.0.0.1:8000/filme/`);
      
        const data = await response.json();
        setFilme(data);
        console.log(data);
      }
     ////////////////////////////////////////////////////////////////////////////

     function handleForm(event){
        const {name, value} = event.target;
        setFormData((prevState) => 
            ({
            ...prevState,
            [name]: value.id,
            }),
        );
        setPlaceholder2(value.nome)
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

    ////////////////////////////////////////////////////////////////////////////

    function SalvarFavoritos(){
        event.preventDefault();
        setIsPending(true);
        fetch('http://127.0.0.1:8000/favoritos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]),
      }).then(() => { 
        console.log('favoritos cadastrado');
        console.log(formData); 
        setIsPending(false); 
      
      })
      }
  
    return(
        <div>
            <h1>Filmes favoritos</h1>
                <Head>
                    <title>ManFlix | Favorites</title>
                </Head>
            <form>
                <h3>Usuário</h3>
                <Dropdown
                            id="usuarioFk"
                            name="usuarioFk"
                            optionLabel="nome" //pra saber qual dado vou pegar!
                            options={usuario} // AQUI É PRA PEGAR TUDO Q TEM DENTRO DO REPOSITORIO! Mas como a gente escolheu optionLabel=name, a gente só vai pegar as informacoes de nome
                            onShow={() => getUsuario()}
                            onChange={(e) => handleForm2(e,e.target.value.id)}
                            value={usuario.id}
                            placeholder={placeholder}
       
                        />
                <h3>Filme favorito</h3>
                <Dropdown
                            id="filmeFk"
                            name="filmeFk"
                            optionLabel="nome" 
                            options={filme} 
                            onShow={() => getFilmes()}
                            onChange={(e) => handleForm(e,e.target.value.id)}
                            value={filme.id}
                            placeholder={placeholder2}
                           
                        />
            </form>
            <br></br>
            { !isPending && <Button label="Favoritar" onClick={(e)=>SalvarFavoritos(e)} />}
            { isPending && <Button label="Favoritando..." onClick={(e)=>SalvarFavoritos(e)} />}
        </div>

    )
}


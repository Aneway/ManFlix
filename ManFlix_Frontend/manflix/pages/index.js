import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { Card } from 'primereact/card';




export default function Home() {
  
  const [filmes, setFilmes] = useState([]);

  useEffect(async() =>{
    const response = await fetch(`http://127.0.0.1:8000/filme/`);
  
    //converter a resposta do formulario para json:
    const data = await response.json();
    setFilmes(data);
    console.log(filmes);
  }, []
  );


  return (
    <div>
      <Head>
        <title>ManFlix | Home</title>
      </Head>

      <h1 className={styles.title}>WELCOME TO THE MANFLIX!</h1>
      <p className={styles.text}>Explore e descubra sobre nossos filmes</p>
      <div className="div-card">
        {filmes[0] && filmes.map((data)=>{
          return <div>
            <Card className="card">
              <Image className="iconFilme"
              src="/movie.png" width="100" height="100"></Image><br></br>
              {data.nome}
              {/* <button onClick={() => deletefilme(filmes.id)}>Delete</button> */}
      
            </Card></div>
        })}
        
      </div>
      
        
      
    </div>
    

  )
}

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/manflixicon.png" width={60} height={60}/>
            </div>
            <Link href="/"><a>Home</a></Link> 
            <a>|</a>
            <Link href="/Cadastrar"><a>Cadastro (Filme)</a></Link>
            <a>|</a>
            <Link href="/Cadastro_Usuario"><a>Cadastro (Usuário)</a></Link>
            <a>|</a>
            <Link href="/Favoritos"><a>Favoritos</a></Link>
            <a>|</a>
            <Link href="/Excluir"><a>Deletar</a></Link>
            
        </nav>
     );
}
 
export default Navbar; ;
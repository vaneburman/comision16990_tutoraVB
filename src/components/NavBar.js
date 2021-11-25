import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    //voy a crear un NavBar en JSX de lo más simple,sin estilos para que no se mareen con info que no necesitamos. Primero tienen que entender lo crudo de la estrategia y luego agregarle el estilo. 
    return (
        <nav style={
            {backgroundColor: "#ffa", 
            padding: "3rem",
            fontSize: "1.5rem", 
            display: "flex", 
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",}}>
                
            <Link to="/">El peor navBar del mundo</Link>
            <div>
                <ul>
                    <li>
                        {/* Esto antes estaba asi <a href="/">Home</a>  */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* Esto antes estaba asi <a href="/cat1">Categoria 1</a> */}
                        <Link to="/categoria/didacticos">Juguetes Didácticos</Link> 
                    </li>
                    <li>
                         {/* Esto antes estaba asi <a href="/cat2">Categoria 2</a>  */}
                         <Link to="/categoria/educativos">Juguetes Educativos</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
       
    )
}

export default NavBar; 
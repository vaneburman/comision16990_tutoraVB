import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    //voy a crear un NavBar en JSX de lo más simple,sin estilos para que no se mareen con info que no necesitamos. Primero tienen que entender lo crudo de la estrategia y luego agregarle el estilo. 
    return (
        <nav>
            <p>Brand</p>
            <div>
                <ul>
                    <li>
                        {/* Esto se va a cambiar por nuestras rutas de React router dom */}
                        <a href="/">Home</a> 
                    </li>
                    <li>
                        {/* Esto se va a cambiar por nuestras rutas de React router dom */}
                        <a href="/cat1">Categoria 1</a> 
                    </li>
                    <li>
                         {/* Esto se va a cambiar por nuestras rutas de React router dom */}
                         <a href="/cat2">Categoria 2</a> 
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
       
    )
}

export default NavBar; 
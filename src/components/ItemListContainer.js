import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { ListaProductos } from './ListaProductos'


const ItemListContainer = () =>{

    //si vamos a hacer un pedido de productos, que nos va a traer un array, tenemos que persistir ese array en el estado porque sino cada vez que renderizamos el componente, Me va a pisar el array y voy a tener que estar llamando a la API nuevamente (eso es super costoso)
    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    //La promesa la pueden hacer en un helper... yo la hago acá para que se note bien bien el patrón de que el container hace el pedido. 
      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(ListaProductos)
              }, 2000)
          })
          promesa.then((ListaProductos)=>{
              console.log('OK');
              setProductos(ListaProductos)
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [])
     //el segundo parámetro es un array vacío porque no queremos que se ejecute el useEffect cada vez que se renderice el componente.

    console.log(productos)
    

//ese estado que seteamos en el useState, es el que va a ser la props que el container le va a pasar a ItemList, que será el responsable de mapearlo. Recuerden: darle el mínimo trabajo a cada componente

//seccion ternario del loading: si loading es true, es porque todavía no ejecutamos el finally, entonces la promesa esta en proceso, por lo que mostramos el loading. Si es false, ya se ejecutó el finally, por lo que ya tenemos los datos, y se lo mandamos a ItemList. Sino ItemList va a recibir un undefined (array vacío)

    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Está ejecutandose la promesa</h1> 
                : 
            <ItemList lista={productos}/> }
        </div>
    </>
    )
    };

export default ItemListContainer
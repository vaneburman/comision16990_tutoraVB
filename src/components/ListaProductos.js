//esta es una lista de productos harcodeada. Lo mismo vamos a traer de nuestras APIs con fetch: Un array de objetos producto, que se pueda mapear en los componentes lista.


export const ListaProductos = [{
    id: 14,
    title:'Reloj Encastrable',
    description: 'Reloj con 12 piezas encastrables para aprender jugando',
    price: 1600.00,
    pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/c9f5cd64249516f432698d909b374e24e52b5c0ee8a007c1b56fe02e3caf98bc1393.jpeg',
    stock: 5,
    categoria: 'didacticos',
},
{
    id: 25,
    title: 'Juego de Sumas y Restas',
    description: '27 fichas circulares de madera encastrables y combinables entre si',
    price: 820.00,
    pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/84d5c66cdb7b08482d36584979d9f2ea15385971a5b8eb8d6e54c7fc94505bcd1393.jpeg',
    stock: 7,
    categoria: 'educativos',
},
{
    id: 154,
    title: 'Rompe-Robot',
    description: '26 piezas para armar 4 robot',
    price: 875.00,
    pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/7dc7750eab243df5a3273b13c25a7f1c762591d74c7deffb2e0f29a7df8164611393.jpeg',
    stock: 2,
    categoria: 'didacticos',
},
{
    id: 414,
    title: 'Memo Monstruos',
    description: '12 fichas realizadas en madera laminada',
    price: 499.00,
    pictureURL: 'https://d22fxaf9t8d39k.cloudfront.net/7cc5c99717f35bbecff9b5cbc3c9560a92948360349f533de7b991cf1dacd0311393.jpeg',
    stock: 16,
    categoria: 'didacticos',
}
]
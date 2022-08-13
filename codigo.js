// //Simulador Interactivo 
/* Constructor */
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
/* Array de Productos */
const carrito = []
const productos = [
    {
        "id": 1,
        "nombre": "Camiseta Boca Juniors",
        "precio": 15000,
        "img": "./img/boca.jpeg",
    },

    {
        "id": 2,
        "nombre": "Camiseta River Plate",
        "precio": 16500,
        "img": "./img/river.jpeg",
    },

    {
        "id": 3,
        "nombre": "Camiseta Argentina Qatar",
        "precio": 9999,
        "img": "./img/Argentina.jpeg",
    },

    {
        "id": 4,
        "nombre": "Short Boca Juniors",
        "precio": 7000,
        "img": "./img/sBoca.jpg",
    },

    {
        "id": 5,
        "nombre": "Short River Plate",
        "precio": 7999,
        "img": "./img/sRiver.jpg",
    },

    {
        "id": 6,
        "nombre": "Short Argentina Qatar",
        "precio": 5500,
        "img": "./img/sArgentina.jpg",
    },

    {
        "id": 7,
        "nombre": "Botines Nemeziz",
        "precio": 16000,
        "img": "./img/bNemeziz.jpg",
    },

    {
        "id": 8,
        "nombre": "Botines Predator",
        "precio": 19000,
        "img": "./img/bPredator.jpg",
    },

    {
        "id": 9,
        "nombre": "Botines X SpeedFlow",
        "precio": 22000,
        "img": "./img/bXspeedflow.jpg",
    },

    {
        "id": 10,
        "nombre": "Pelota Qatar",
        "precio": 24999,
        "img": "./img/pQatar.jpg",
    }
]
let precio = 0;
/* Cards */
const seccion = document.getElementById("section")
for (const producto of productos) {
    let carta = document.createElement("div")
    carta.innerHTML = `
        <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}</p>
    <button class="btn btn-primary" id="boton${producto.id}">Añadir</button>
    </div>
        </div>
    `
    seccion.append(carta)
    /* Evento Button */
let button= document.getElementById(`boton${producto.id}`)
button.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("agregaste el producto al carrito.")
    console.log(producto)
    carrito.push(producto)
})
}
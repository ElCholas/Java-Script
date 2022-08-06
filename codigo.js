//Simulador Interactivo 
/* Constructor */
class Producto {
    constructor(nombre, precio, original) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.original = original;
    }
}
/* Array de productos */
const productos = [
    {
        nombre:"Camiseta Boca Juniors", precio: 15000, img:"./img/boca.jpeg", alt:"Camiseta Boca Juniors",
    },

    {
        nombre:"Camiseta River Plate", precio: 16500, img:"./img/river.jpeg", alt:"Camiseta River Plate",
    },

    {
        nombre:"Camiseta Argentina Qatar", precio: 9999, img:"./img/Argentina.jpeg", alt:"Camiseta Argentina Qatar",
    },

    {
        nombre:"Short Boca Juniors", precio: 7000, img:"./img/sBoca.jpg", alt:"Short Boca Juniors",
    },

    {
        nombre:"Short River Plate", precio: 7999, img:"./img/sRiver.jpg", alt:"Short River Plate",
    },

    {
        nombre:"Short Argentina Qatar", precio: 5500, img:"./img/sArgentina.jpg", alt:"Short Argetina Qatar",
    },

    {
        nombre:"Botines Nemeziz", precio: 16000, img:"./img/bNemeziz.jpg", alt:"Botines Nemeziz",
    },

    {
        nombre:"Botines Predator", precio: 19000, img:"./img/bPredator.jpg", alt:"Predator",
    },

    {
        nombre:"Botines X SpeedFlow", precio: 22000, img:"./img/bXspeedflow.jpg", alt:"Botines X SpeedFlow",
    },

    {
        nombre:"Pelota Qatar", precio: 24999, img:"./img/pQatar.jpg", alt:"Pelota Qatar",
    },
]

/* Cards */
let seccion = document.getElementById ("section")
for (const producto of productos) {
    let carta = document.createElement("div")
    carta.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <button class="btn btn-primary btnPrincipal">Añadir</button>
        </div>
    </div>
    `
    seccion.append(carta)
}

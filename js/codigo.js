//  Simulador Interactivo 

/* Constructor */
class Producto {
    constructor(nombre, precio, talle) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.talle = talle;
    }
}

/* Constantes */

let productos = []
const carrito = []
const precioTotal = document.getElementById("precioTotal")
const carro = document.getElementById("contenedorCarrito")
const seccion = document.getElementById("section")

/* Llamada a productos */

obtenerJson()

function obtenerJson() {
    const URLJSON = "js/productos.json"
    fetch(URLJSON)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            productos = data
            dibujarCarrito()
        })
}

/* Cards */

function dibujarCarrito() {
    for (const producto of productos) {
        let carta = document.createElement("div")
        carta.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <button class="btn btn-primary" id="boton${producto.id}">Añadir</button>
        </div>
        </div>
        `
        seccion.append(carta)
        /* Evento Button */
        let button = document.getElementById(`boton${producto.id}`)
        button.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("agregaste el producto al carrito.")
            console.log(producto)
            carrito.push(producto)
            Swal.fire(
                'Producto: ' + producto.nombre,
                'Agregado al carrito',
                'success'
            )
            agregarCarrito()
        })
    }
}

/* Operador Avanzado */

carrito.length === 0
    ? (contenedorCarrito.innerHTML = `<p class= "carritoVacio">Carrito vacío, agregue su producto.</p>`)
    : (contenedorCarrito.innerHTML = "")

/* Comprar */

let comprarCarrito = document.getElementById("comprar")
comprarCarrito.onclick = () => {
    localStorage.removeItem("carrito", JSON.stringify(carrito))
    carro.innerHTML = ""
    carrito.length !== 0 ?
        //Si el carrito tiene productos y se presiona comprar.
        Swal.fire(
            `¡Su compra se ha realizado con exito!`,
            `No dude en volver a comprarnos`,
            `success`
        )
        :
        //Si el carrito no posee productos y se presiona comprar. 
        Swal.fire(
            `¡Aun no posee productos en su carrito!`,
            `Seleccione el producto que desee y vuelva a intentarlo`,
            `error`
        );
    carrito.length = 0;
}

/* Carrito */

const agregarCarrito = () => {
    carro.innerHTML = ""
    carrito.forEach((carrito) => {
        const div = document.createElement("div")
        div.className = "carrito"
        div.innerHTML = `
                <img src="${carrito.img}" class="img"></img>
                <p>${carrito.nombre}</p>
                <p>$${carrito.precio}</p>
                `
        localStorage.setItem("Carrito", JSON.stringify(carrito))
        carro.appendChild(div)
    })
    precioTotal.innerText = carrito.reduce((acumulador, productos) => acumulador + productos.precio, 0)
}

/* Local Storage */

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
    agregarCarrito()
}

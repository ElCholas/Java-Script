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
let carrito = []
let comprarCarrito = document.getElementById("comprar")
const precioTotal = document.getElementById("precioTotal")
const carro = document.getElementById("contenedorCarrito")
const seccion = document.getElementById("section")
const vaciarCarrito = document.getElementById("VaciarCarrito")

/* Llamada a funciones */


obtenerJson()

function obtenerJson() {
    const URLJSON = "js/productos.json"
    fetch(URLJSON)
        .then(res => res.json())
        .then(data => {
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
                '' + producto.nombre,
                'Agregado al carrito',
                'success'
            )
            contCarrito()
        })
    }
}

/* Interaccion con el usuario */

/* Se le pide nombre y se le proporciona una oferta */

const inputValue = ""
const { value: usuario } = await Swal.fire({
    title: "¡Bienvenido/a!",
    input: "text",
    inputLabel: "¡No te pierdas nuestras ofertas! Ingrese su nombre.",
    inputValue: inputValue,
    inputValidator: (value) => {
        if (!value) {
            return "¡Por favor, ingrese su nombre!"
        }
    }
})
if (usuario) {
    Swal.fire(`Hola, ${usuario}. ¡Bienvenido/a!`)
    let cartel = document.querySelector(`.intro`);
    cartel.innerHTML = `<p class="productos_intro boxShadow" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="1000">
    ${usuario}, ¡Si sos amante del futbol. Con la compra de unos botines + pelota de qatar, te llevas de regalo unas medias y unas canilleras! </p>`
}

/* Advierte que el carrito esta vacio  */

function carritoLength() {
    carrito.length === 0
    ? (contenedorCarrito.innerHTML = `<p class= "carritoVacio">Carrito vacío, agregue su producto.</p>`)
    : (contenedorCarrito.innerHTML = "")
}
carritoLength()

/* Carrito */

const contCarrito = () => {
    carro.innerHTML = ""
    carrito.forEach((carrito) => {
        const div = document.createElement("div")
        div.className = "carrito"
        div.innerHTML = `
        <img src="${carrito.img}" class="img"></img>
        <p>${carrito.nombre}</p>
            <p>$${carrito.precio}</p>
            <p>Talle  <input id="talleProducto" type="number" value="${carrito.talle}" min="1" max="50" step="1" class="talle"></input></p>
            `
        carro.appendChild(div)
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    precioTotal.innerText = carrito.reduce((acumulador, productos) => acumulador + productos.precio, 0)
}

    /* Comprar */

    comprarCarrito.onclick = () => {
        localStorage.removeItem("carrito", JSON.stringify(carrito))
        precioTotal.innerText = 0
        carro.innerHTML = ""
        carrito.length !== 0 ?
            //Si el carrito tiene productos y se presiona comprar.
            Swal.fire(
                `¡Gracias, su compra se ha realizado con exito!`,
                `Estamos gestionando su envio`,
                `success`
            )
            :
            //Si el carrito no posee productos y se presiona comprar. 
            Swal.fire(
                `¡Aun no posee productos en su carrito!`,
                `Seleccione el producto que desee y vuelva a intentarlo`,
                `error`
            ),
            carrito.length = 0;
    }

    /* Vaciar carrito */

    vaciarCarrito.addEventListener("click", () => {
        carrito.length = 0
        console.log(carrito)
        contCarrito()
    })


/* Local storage */

localstorage()
function localstorage() {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        contCarrito()
    }
}
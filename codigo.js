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
const precioTotal = document.getElementById("precioTotal")
const carro = document.getElementById("contenedorCarrito")
const carrito = []
const productos = [
    {
        "id": 1,
        "nombre": "Camiseta Boca Juniors",
        "precio": 15000,
        "img": "./img/boca.jpeg",
        "talle": "xl"
    },
    
    {
        "id": 2,
        "nombre": "Camiseta River Plate",
        "precio": 16500,
        "img": "./img/river.jpeg",
        "talle": "xl"
    },
    
    {
        "id": 3,
        "nombre": "Camiseta Argentina Qatar",
        "precio": 9999,
        "img": "./img/Argentina.jpeg",
        "talle": "xl"
    },
    
    {
        "id": 4,
        "nombre": "Short Boca Juniors",
        "precio": 7000,
        "img": "./img/sBoca.jpg",
        "talle": "l"
    },
    
    {
        "id": 5,
        "nombre": "Short River Plate",
        "precio": 7999,
        "img": "./img/sRiver.jpg",
        "talle": "l"
    },
    
    {
        "id": 6,
        "nombre": "Short Argentina Qatar",
        "precio": 5500,
        "img": "./img/sArgentina.jpg",
        "talle": "l"
    },
    
    {
        "id": 7,
        "nombre": "Botines Nemeziz",
        "precio": 16000,
        "img": "./img/bNemeziz.jpg",
        "talle": "40"
    },
    
    {
        "id": 8,
        "nombre": "Botines Predator",
        "precio": 19000,
        "img": "./img/bPredator.jpg",
        "talle": "40"
    },
    
    {
        "id": 9,
        "nombre": "Botines X SpeedFlow",
        "precio": 22000,
        "img": "./img/bXspeedflow.jpg",
        "talle": "40"
    },
    
    {
        "id": 10,
        "nombre": "Pelota Qatar",
        "precio": 24999,
        "img": "./img/pQatar.jpg",
    }
]
/* Cards */
const seccion = document.getElementById("section")
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
            'Producto: '+producto.nombre,
            'Agregado al carrito',
            'success' 
            )
            agregarCarrito()
        })
    }
    /* Operador Avanzado */
    carrito.length === 0 
    ? (contenedorCarrito.innerHTML=`<p class= "carritoVacio">Carrito vacío, agregue su producto.</p>`)
    : (contenedorCarrito.innerHTML= "")
    /* Comprar */
    let comprarCarrito = document.getElementById("comprar")
    comprarCarrito.onclick=()=>{
        localStorage.removeItem("carrito",JSON.stringify(carrito))
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
                carrito.length=0;
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
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    agregarCarrito()
}
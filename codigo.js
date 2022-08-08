//Simulador Interactivo 
/* Constructor */
class Producto {
    constructor(nombre, precio, original) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.original = original;
    }
}
/* Array de Productos */
const productos = [
    {
        "id":1, 
        "nombre":"Camiseta Boca Juniors", 
        "precio": 15000, 
        "img":"./img/boca.jpeg",
    },
    
    {
        "id":2, 
        "nombre":"Camiseta River Plate", 
        "precio": 16500, 
        "img":"./img/river.jpeg", 
    },
    
    {
        "id":3, 
        "nombre":"Camiseta Argentina Qatar", 
        "precio": 9999, 
        "img":"./img/Argentina.jpeg", 
    },
    
    {
        "id":4, 
        "nombre":"Short Boca Juniors", 
        "precio": 7000, 
        "img":"./img/sBoca.jpg", 
    },
    
    {
        "id":5, 
        "nombre":"Short River Plate", 
        "precio": 7999, 
        "img":"./img/sRiver.jpg", 
    },
    
    {
        "id":6, 
        "nombre":"Short Argentina Qatar", 
        "precio": 5500,
        "img":"./img/sArgentina.jpg", 
    },
    
    {
        "id":7, 
        "nombre":"Botines Nemeziz",
        "precio": 16000, 
        "img":"./img/bNemeziz.jpg", 
    },
    
    {
        "id":8, 
        "nombre":"Botines Predator", 
        "precio": 19000, 
        "img":"./img/bPredator.jpg", 
    },
    
    {
        "id":9, 
        "nombre":"Botines X SpeedFlow", 
        "precio": 22000, 
        "img":"./img/bXspeedflow.jpg", 
    },
    
    {
        "id":10, 
        "nombre":"Pelota Qatar", 
        "precio": 24999, 
        "img":"./img/pQatar.jpg", 
    }
]
let precio = 0;
/* Cards */
const seccion = document.getElementById ("section")
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
} 
/* Evento Button */
const button1=document.getElementById("boton1")
button1.addEventListener("click", respuesta1)
function respuesta1(){
    productos.push(new Producto("Camiseta Boca Juniors",15000,"./img/boca.jpeg",1))
    precio= 15000;
    console.log("Agregaste Camiseta Boca Juniors: $"+precio)
}
const button2=document.getElementById("boton2")
button2.addEventListener("click", respuesta2)
function respuesta2(){
    productos.push(new Producto("Camiseta River Plate",16500,"./img/river.jpeg",2))
    precio=16500;
    console.log("Agregaste Camiseta River Plate: $"+precio)
}
const button3=document.getElementById("boton3")
button3.addEventListener("click", respuesta3)
function respuesta3(){
    productos.push(new Producto("Camiseta Argentina Qatar",9999,"./img/Argentina.jpeg",3))
    precio= 9999;
    console.log("Agregaste Camiseta Argentina Qatar: $"+precio)
}
const button4=document.getElementById("boton4")
button4.addEventListener("click", respuesta4)
function respuesta4(){
    productos.push(new Producto("Short Boca Juniors",7000,"./img/sBoca.jpg",4))
    precio=7000;
    console.log("Agregaste Short Boca Juniors: $"+precio)
}
const button5=document.getElementById("boton5")
button5.addEventListener("click", respuesta5)
function respuesta5(){
    productos.push(new Producto("Short River Plate",7999,"./img/sRiver.jpg",5))
    precio=7999;
    console.log("Agregaste Short River Plate: $"+precio)
}
const button6=document.getElementById("boton6")
button6.addEventListener("click", respuesta6)
function respuesta6(){
    productos.push(new Producto("Short Argentina Qatar",5500,"./img/sArgentina.jpg",6))
    precio=5500;
    console.log("Agregaste Short Argentina Qatar: $"+precio)
}
const button7=document.getElementById("boton7")
button7.addEventListener("click", respuesta7)
function respuesta7(){
    productos.push(new Producto("Botines Nemeziz",16000,"./img/bNemeziz.jpg",7))
    precio=16000;
    console.log("Agregaste Botines Nemeziz: $"+precio)
}
const button8=document.getElementById("boton8")
button8.addEventListener("click", respuesta8)
function respuesta8(){
    productos.push(new Producto("Botines Predator",19000,"./img/bPredator.jpg",8))
    precio=19000;
    console.log("Agregaste Botines Predator: $"+precio)
}
const button9=document.getElementById("boton9")
button9.addEventListener("click", respuesta9)
function respuesta9(){
    productos.push(new Producto("Botines X SpeedFlow",22000,"./img/bXspeedflow.jpg",9))
    precio=22000;
    console.log("Agregaste Botines X SpeedFlow:$"+precio)
}
const button11=document.getElementById("boton10")
button11.addEventListener("click", respuesta10)
function respuesta10(){
    productos.push(new Producto("Pelota Qatar",24999,"./img/pQatar.jpg",10))
    precio=24999;
    console.log("Agregaste Pelota Qatar: $"+precio)
}

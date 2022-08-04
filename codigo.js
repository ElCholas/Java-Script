//Simulador Interactivo 
/* Constructor */
class Producto {
    constructor(nombre, precio, original) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.original = original;
    }
}
const productos = [];
/* Pide al usuario nombre de producto */
let ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n camiseta boca juniors titular 2022 \n camiseta river plate titular 2022 \n camiseta argentina qatar 2022 \n short boca juniors titular 2022 \n short river plate titular 2022 \n short argentina qatar 2022 \n botines nemeziz \n botines predator \n botines x speedflow \n pelota qatar 2022 \n(Para salir presione enter)".toLowerCase());
let precio = 0;
/* Suma+Productos */
function calcular() {

    while (ropaDeportiva != "") {
        switch (ropaDeportiva) {
            case "camiseta boca juniors titular 2022":
                productos.push(new Producto("camiseta boca juniors titular 2022", 15000, true));
                precio = precio + 15000;
                break;
            case "camiseta river plate titular 2022":
                productos.push(new Producto("camiseta river plate titular 2022", 16500, true));
                precio = precio + 16500;
                break;
            case "camiseta argentina qatar 2022":
                productos.push(new Producto("camiseta argentina qatar 2022", 8000, false));
                precio = precio + 13999;
                break;
            case "short boca juniors titular 2022":
                productos.push(new Producto("short boca juniors titular 2022", 7000, true));
                precio = precio + 7000;
                break;
            case "short river plate titular 2022":
                productos.push(new Producto("short river plate titular 2022", 7999, true));
                precio = precio + 7999;
                break;
            case "short argentina qatar 2022":
                productos.push(new Producto("short argentina qatar 2022", 5000, false));
                precio = precio + 6500;
                break;
            case "botines nemeziz":
                productos.push(new Producto("botines nemeziz", 12000, false))
                precio = precio + 17000;
                break;
            case "botines predator":
                productos.push(new Producto("botines predator", 19000, true))
                precio = precio + 19000;
                break;
            case "botines x speedflow":
                productos.push(new Producto("botines x speedflow", 22000, true))
                precio = precio + 22000;
                break;
            case "pelota qatar 2022":
                productos.push(new Producto("pelota qatar 2022", 24999, true))
                precio = precio + 24999;
                break;
        }
        /* Muestra productos selecciondos */
        console.table(productos)
        ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n camiseta boca juniors titular 2022 \n camiseta river plate titular 2022 \n camiseta argentina qatar 2022 \n short boca juniors titular 2022 \n short river plate titular 2022 \n short argentina qatar 2022 \n botines nemeziz \n botines predator \n botines x speedflow \n pelota qatar 2022 \npara salir presione enter")
    }
    /* Filtra producto */
    const original = productos.filter((productos) => productos.original == false)
    console.log(original)
    console.log("Total a pagar: $" + precio);
}
/* Funcion Suma */
calcular();


// //Complementario
// let numero = parseInt(prompt("Coloque un numero"))
// for(i = 0; i < numero; i++) {
//     console.log("Hola")
// }


//Simulador Interactivo 
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    }
    const productos = [];
    let ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n camiseta boca juniors titular 2022 \n camiseta river plate titular 2022 \n camiseta argentina qatar 2022 \n short boca juniors titular 2022 \n short river plate titular 2022 \n short argentina qatar 2022 \n botines nemeziz \n botines predator \n botines x speedflow \n pelota qatar 2022 \n(Para salir escriba s)".toLowerCase());
    let precio = 0;
    
    function calculo(){
    
        while (ropaDeportiva != "s") {
            switch (ropaDeportiva) {
                case "camiseta boca juniors titular 2022":
                    productos.push(new Producto("camiseta boca juniors titular 2022",15000));
                    precio = precio + 15000;
                    break;
                case "camiseta river plate titular 2022":
                    productos.push(new Producto("camiseta river plate titular 2022",16500));
                    precio = precio + 16500;
                    break;
                case "camiseta argentina qatar 2022":
                    productos.push(new Producto("camiseta argentina qatar 2022",13999));
                    precio = precio + 13999;
                    break;
                case "short boca juniors titular 2022":
                    productos.push(new Producto("short boca juniors titular 2022",7000));
                    precio = precio + 7000;
                    break;
                case "short river plate titular 2022":
                    productos.push(new Producto("short river plate titular 2022",7999));
                    precio = precio + 7999;
                    break;
                case "short argentina qatar 2022":
                    productos.push(new Producto("short argentina qatar 2022",
                    6500));
                    precio = precio + 6500;
                    break;
                    case "botines nemeziz":
                        productos.push(new Producto("botines nemeziz",16000))
                        precio = precio + 16000;
                        break;
                case "botines predator":
                    productos.push(new Producto("botines predator",19000))
                    precio = precio + 19000;
                    break;
                    case "botines x speedflow":
                        productos.push(new Producto("botines x speedflow",22000))
                        precio = precio + 22000;
                        break;
                case "pelota qatar 2022":
                    productos.push(new Producto("pelota qatar 2022",24999))
                    precio = precio + 24999;
                    break;
            }
            console.log(productos)
            ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n camiseta boca juniors titular 2022 \n camiseta river plate titular 2022 \n camiseta argentina qatar 2022 \n short boca juniors titular 2022 \n short river plate titular 2022 \n short argentina qatar 2022 \n botines nemeziz \n botines predator \n botines x speedflow \n pelota qatar 2022 \npara salir escriba s")
        }
        console.log("Total a pagar: $" + precio);
    }
    calculo();
    

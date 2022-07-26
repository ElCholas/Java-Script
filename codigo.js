// //Complementario
// let numero = parseInt(prompt("Coloque un numero"))
// for(i = 0; i < numero; i++) {
//     console.log("Hola")
// }


//Simulador Interactivo 
let ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n Camiseta Boca Juniors titular 2022 \n Camiseta River Plate titular 2022 \n Camiseta Argentina QATAR 2022 \n Short Boca Juniors titular 2022 \n Short River Plate titular 2022 \n Short Argentina QATAR 2022 \n Botines Nemeziz \n Botines Predator \n Botines X SpeedFlow \n Pelota QATAR 2022 \nPara salir escriba S");
let precio = 0;

function calculo(){
    while (ropaDeportiva != "S") {
        switch (ropaDeportiva) {
            case "Camiseta Boca Juniors titular 2022":
                console.log("Camiseta Boca Juniors $15.000")
                precio = precio + 15000;
                break;
            case "Camiseta River Plate titular 2022":
                console.log("Camiseta River Plate $16.500")
                precio = precio + 16500;
                break;
            case "Camiseta Argentina QATAR 2022":
                console.log("Camiseta Argentina $13.999")
                precio = precio + 13999;
                break;
            case "Short Boca Juniors titular 2022":
                console.log("Short Boca Juniors $7.000")
                precio = precio + 7000;
                break;
            case "Short River Plate titular 2022":
                console.log("Short River Plate $7.999")
                precio = precio + 7999;
                break;
            case "Short Argentina QATAR 2022":
                console.log("Short Argentina $6.500")
                precio = precio + 6500;
                break;
                case "Botines Nemeziz":
                    console.log("Nemeziz $16.000")
                    precio = precio + 16000;
                    break;
            case "Botines Predator":
                console.log("Predator $19.000")
                precio = precio + 19000;
                break;
                case "Botines X SpeedFlow":
                    console.log("SpeedFlow $22.000")
                    precio = precio + 22000;
                    break;
            case "Pelota QATAR 2022":
                console.log("Pelota QATAR 2022 $24.999")
                precio = precio + 24999;
                break;
        }
        ropaDeportiva = prompt("Escriba el producto que desea adquirir y te dire su precio \n Camiseta Boca Juniors titular 2022 \n Camiseta River Plate titular 2022 \n Camiseta Argentina QATAR 2022 \n Short Boca Juniors titular 2022 \n Short River Plate titular 2022 \n Short Argentina QATAR 2022 \n Botines Nemeziz \n Botines Predator \n Botines X SpeedFlow \n Pelota QATAR 2022 \nPara salir escriba S")
    }
    console.log("Total a pagar: $" + precio);
}
calculo();

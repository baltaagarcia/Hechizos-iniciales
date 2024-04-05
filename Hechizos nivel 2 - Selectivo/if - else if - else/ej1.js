const leer = require("prompt-sync")();
const EDAD_MINIMA = 11
/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */


function main() { }
let edad = 0
console.log("Ingrese su edad: "); {
    edad = Number(leer())
    if (edad >= edad_minima) {
        console.log("Puedes comprar la varita");
    } else {
        console.log("No puedes comprar la varita");
    }
}


main();
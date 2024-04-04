const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */


function main() {
 let raices_mandragora=0
 let escarabajos=0
 console.log("Cuantas raices de mandragora necesita para la pocion?: ");
 raices_mandragora=Number(leer())
 console.log("Cuantos escarabajos de ojo de tigre necesita para la pocion?: ");
 escarabajos=Number(leer())
 ingredientes=raices_mandragora+escarabajos
 console.log("La cantidad de ingredientes es: ",ingredientes);   
}


main();
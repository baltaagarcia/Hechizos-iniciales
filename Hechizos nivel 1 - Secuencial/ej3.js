const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */


function main() {
 let cant_plumas=0
 let peso_nimbus=0
 console.log("Cuanto es el peso base de la Nimbus?:");
 peso_nimbus=Number(leer())
 console.log("Cuantas plumas se utilizan?:");
 cant_plumas=Number(leer())
peso_escoba=cant_plumas*0.1
console.log("La cantidad de plumas que se necesitan son:",peso_escoba+peso_nimbus);


}


main();
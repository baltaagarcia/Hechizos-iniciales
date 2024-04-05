const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */


function main() {
    let calificacion = 0;

    console.log("ingrese puntaje");
    calificacion = Number(leer());
    if (calificacion < 50) {
        console.log(" entras casa de slytherin");

    } else if ((calificacion >= 50) &&(calificacion < 70)) {
        console.log("entras a ravenclaw");

    }else if ((calificacion >= 70) &&(calificacion < 90)) {
        console.log("entras a Hufflepuff");

    }else if (calificacion > 90) {
        console.log("Entras a Gryffindor ");




    }

}


main();
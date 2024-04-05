const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas 
 * con recuerdos dolorosos y desesperación. Para protegerse de los Dementores, los estudiantes de
 *  Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con 
 * recuerdos felices. En este ejercicio, simularemos un encuentro con un Dementor en un mini juego
 *  donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y 
 * proteger su felicidad. Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el 
 * hechizo Patronus varias veces para vencer al Dementor. Si el estudiante no ingresa el hechizo
 *  correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose 
 * más a la derrota del estudiante. En otro caso si el estudiante ingresa bien los hechizos y logra vencer
 *  al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */


function main() {

    const DAÑO_POR_HECHIZO = 267
    const DAÑO_POR_TURNO_PERDIDO = 75;
    let vida_max_dementor = 1000;
    let vida_max_estud = 350;
    let hechizo = "";
    for (let i = 0; i < 5; i++) {

        if ((vida_max_estud <= 0) || (vida_max_dementor <= 0)) {
            i = 5
        } else{
            console.log("Lanze el Hechizo");
            hechizo = leer();
            if(vida_max_dementor <= 0) {
                console.log("GANASTE VENCISTE AL DEMENTOR");
                i = 5
            }else if (hechizo == "a") {
                console.log("Muy bien has acertado el hechizo!");
                console.log("VIDA DEL DEMENTOR:", vida_max_dementor = vida_max_dementor - DAÑO_POR_HECHIZO);
            } else if (hechizo != "a") {
                console.log("Has Errado el hechizo eso te provoco daños");
                console.log("Tu vida actual es:", vida_max_estud = vida_max_estud - DAÑO_POR_TURNO_PERDIDO);

            } else if (vida_max_estud <= 0) {
                console.log("Perdiste:c");
                i = 5
            } else if (vida_max_dementor <= 0) {
                console.log("GANASTE VENCISTE AL DEMENTOR");
                i = 5
            }
        }

    } if (vida_max_dementor<=0) {
        console.log("Ganaste!");
        
    }else{
        console.log("Perdiste");
    }



}




main();
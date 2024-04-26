const leer = require("prompt-sync")();
const DAÑO_SALUD = 5.7
const DAÑO_CORDURA = 10.4
const PROBABILIDAD_BASE_INSTAMUERTE = 5
const INCREMENTO_FIJO_INSTAMUERTE = 2.4
const VIVO = true
const MUERTO = false
const PROBABILIDAD_BASE_ESQUIVAR_ATAQUE = 50
const DECREMENTO_FIJO_ESQUIVAR_ATAQUE = 11.875

/**
 * Probabilidad de morir de un golpe
 * @param {number} horrucrex_destruidos la cantidad
 * @returns si el jugador sigue vivo
 */
function muerte_instantanea(horrucrex_destruidos) {
    let estado_vida = VIVO
    probabilidad = Math.random() * 100;
    if (probabilidad < PROBABILIDAD_BASE_INSTAMUERTE + INCREMENTO_FIJO_INSTAMUERTE * horrucrex_destruidos) {
        estado_vida = MUERTO
    }
    return estado_vida
}
function generador_numero_aleatorio_codigo1(params) {
    min = -3
    max = 20
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numero_aleatorio
}
function probabilidad_esquivar_ataque(horrucrex_destruidos) {
    evasion_de_ataque = false
    probabilidad = Math.random() * 100

    if (probabilidad < PROBABILIDAD_BASE_ESQUIVAR_ATAQUE - DECREMENTO_FIJO_ESQUIVAR_ATAQUE * horrucrex_destruidos) {
        evasion_de_ataque = true
    }
    return evasion_de_ataque

}

function disminucion_de_puntos_de_vitalidad(eleccion_esquivar,puntos_cordura,puntos_salud){
eleccion_esquivar=0
if (eleccion_esquivar=1) {
    return puntos_cordura=puntos_cordura-DAÑO_CORDURA

}
else{
   return puntos_salud = puntos_salud - DAÑO_SALUD

}}


function main() {
    let puntos_salud = 400
    let puntos_cordura = 200
    let turnos = 0
    let horrucrex_destruidos = 0
    let codigo_1 = "R1dd13"
    let ingreso_codigo = ""
    let eleccion_esquivar = 0

    do {
        if (horrucrex_destruidos = 0) {
            console.log("Intenta adivinar el codigo");
            console.log("El codigo empieza con R1dd13? donde ? es un numero aleatorio");
            ingreso_codigo = leer()
            generador_numero_aleatorio_codigo1//borrar solo para comprobar el numero aleatorio
            if (ingreso_codigo = codigo_1 + generador_numero_aleatorio_codigo1) {
                horrucrex_destruidos = horrucrex_destruidos + 1
                console.log("Has acertado el codigo, has eliminado un horrocrux");
                console.log("Horrocruxes Eliminados", horrucrex_destruidos);
            } else {
                console.log("Has errado con el codigo");
                if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                    console.log("Gracias a tus dotes has logrado esquivar el ataque");
                    console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                    eleccion_esquivar = leer()
                    if (eleccion_esquivar == 1) {
                        puntos_cordura = puntos_cordura - DAÑO_CORDURA //SE PUEDE HACER EN UNA SOLA FUNCION LA QUITA DE VIDA Y CORDURA
                        console.log("Has esquivado el daño a tu salud");
                        console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                        console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
                    } else {
                        puntos_salud = puntos_salud - DAÑO_SALUD
                        console.log("Has esquivado el daño a tu cordura");
                        console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                        console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
                    }
                } else {
                    console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                    puntos_cordura = puntos_cordura - DAÑO_CORDURA
                    puntos_salud = puntos_salud - DAÑO_SALUD
                    console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                    console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
                }
            }

        }else{
            console.log("ddd");
        }
    turnos++    
    }while (puntos_salud > 0 && puntos_cordura > 0 && turnos < 30 && muerte_instantanea(horrucrex_destruidos));
console.log("Estoy afuer adel while");
}


main();
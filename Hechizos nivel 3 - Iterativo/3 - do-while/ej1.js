const leer = require("prompt-sync")();
const DAÑO_SALUD = 5.7
const DAÑO_CORDURA = 10.4
const PROBABILIDAD_BASE_INSTAMUERTE = 5
const INCREMENTO_FIJO_INSTAMUERTE = 2.4
const VIVO = true
const MUERTO = false
const PROBABILIDAD_BASE_ESQUIVAR_ATAQUE = 50
const DECREMENTO_FIJO_ESQUIVAR_ATAQUE = 11.875
let puntos_salud = 400
let puntos_cordura = 200
let turnos = 0
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
/**
 * genera el numero aleatorio del codigo
 * @param {*} params 
 * @returns el codigo aleatorio
 */
function generador_numero_aleatorio_codigo1(params) {
    min = -3
    max = 20
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numero_aleatorio
}
/**
 *saca la probabilidad para esquivar el ataque 
 * @param {number} horrucrex_destruidos lo usa como parametro de multiplicador para bajar la probabilidad de esquivar ataque
 * @returns en valor booleano si esquivas el ataque o no
 */
function probabilidad_esquivar_ataque(horrucrex_destruidos) {
    evasion_de_ataque = false
    probabilidad = Math.random() * 100

    if (probabilidad < PROBABILIDAD_BASE_ESQUIVAR_ATAQUE - DECREMENTO_FIJO_ESQUIVAR_ATAQUE * horrucrex_destruidos) {
        evasion_de_ataque = true
    }
    return evasion_de_ataque

}
/**
 * genera el numero aleatorio del codigo2
 * @returns el numero aleatorio del codigo
 */
function generador_numero_aleatorio_codigo2() {
    min = -100
    max = -70
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numero_aleatorio
}
function generador_numero_aleatorio_codigo3(params) {
    min = 4
    max = 12
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return numero_aleatorio
}

function main() {
    let horrucrex_destruidos = 0
    let codigo_1 = "R1dd13"
    let ingreso_codigo = ""
    let eleccion_esquivar = 0
    let codigo_2 = "G4unt!"
    let codigo_3_v1 = "H3L"
    let codigo_3_v2 = "ga!"


    do {
        if (horrucrex_destruidos == 0) {
            console.log("Intenta adivinar el codigo");
            console.log("El codigo empieza con R1dd13? donde ? es un numero aleatorio");
            let codigo_real = generador_numero_aleatorio_codigo1()
            console.log(codigo_real); //borrar solo para comprobar el numero aleatorio
            console.log(codigo_1, codigo_real);
            ingreso_codigo = leer()
            if (ingreso_codigo == (codigo_1 + String(codigo_real))) {
                horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos);
            } else {
                console.log("Has errado con el codigo");
                if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                    console.log("Gracias a tus dotes has logrado esquivar el ataque");
                    console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                    eleccion_esquivar = leer()
                    if (eleccion_esquivar == 1) {
                        puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA);
                        console.log("Has esquivado el daño a tu salud");

                    } else {
                        puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                        console.log("Has esquivado el daño a tu cordura");

                    }
                } else {
                    console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                    puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                    puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA)

                } console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
            }


        } else if (horrucrex_destruidos == 1) {
            console.log("Intenta adivinar el codigo");
            console.log("El codigo empieza con ?G4unt! donde ? es un numero aleatorio");
            let codigo_real_2 = generador_numero_aleatorio_codigo2(); //borrar solo para comprobar el numero aleatorio
            console.log(codigo_real_2);
            console.log(codigo_real_2, codigo_2,);
            ingreso_codigo = leer()
            if (ingreso_codigo == codigo_real_2 + codigo_2) {
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
                        puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA);
                        console.log("Has esquivado el daño a tu salud");
                    } else {
                        puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                        console.log("Has esquivado el daño a tu cordura");
                    }
                } else {
                    console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                    puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                    puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA)
                } console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
            }
        }else if (horrucrex_destruidos==2) {
            console.log("Intenta adivinar el codigo");
            console.log("El codigo es H3l?ga! donde ? es un numero aleatorio");
            let codigo_real_3 = generador_numero_aleatorio_codigo3()
            console.log(codigo_real_3); //borrar solo para comprobar el numero aleatorio
            console.log(codigo_3_v1, codigo_real_3,codigo_3_v2);
            ingreso_codigo = leer()
            if (ingreso_codigo == (codigo_3_v1 + codigo_real_3+codigo_3_v2)) {
                horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos);
            } else {
                console.log("Has errado con el codigo");
                if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                    console.log("Gracias a tus dotes has logrado esquivar el ataque");
                    console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                    eleccion_esquivar = leer()
                    if (eleccion_esquivar == 1) {
                        puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA);
                        console.log("Has esquivado el daño a tu salud");

                    } else {
                        puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                        console.log("Has esquivado el daño a tu cordura");

                    }
                } else {
                    console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                    puntos_salud = actualizar_puntos_de(puntos_salud, DAÑO_SALUD)
                    puntos_cordura = actualizar_puntos_de(puntos_cordura, DAÑO_CORDURA)

                } console.log("PUNTOS DE SALUD RESTANTES", puntos_salud);
                console.log("Puntos DE CORDURA RESTANTES", puntos_cordura);
            }
            
        }

       


        turnos++
        console.log("Turnos utilizados", turnos);
    } while (puntos_salud > 0 && puntos_cordura > 0 && turnos < 30 && muerte_instantanea(horrucrex_destruidos));
    console.log("Estoy afuer adel while");
}


main();

function actualizacion_horrocruxes_eliminados(horrucrex_destruidos) {
    horrucrex_destruidos = horrucrex_destruidos + 1;
    console.log("Has acertado el codigo, has eliminado un horrocrux");
    console.log("Horrocruxes Eliminados", horrucrex_destruidos);
    return horrucrex_destruidos;
}
/**
 * actualiza tus puntos despues de recibir un daño
 * @param {*number} puntos_algo actualiza tus puntos de vida o de cordura 
 * @param {*number} danio_algo acutaliza el daño tanto de cordura como de vida
 * @returns 
 */
function actualizar_puntos_de(puntos_algo, danio_algo) {
    puntos_algo = puntos_algo - danio_algo;
    return puntos_algo;
}

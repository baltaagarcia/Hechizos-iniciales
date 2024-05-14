const leer = require("prompt-sync")();
const DAÑO_SALUD = 5.7
const DAÑO_CORDURA = 10.4
const PROBABILIDAD_BASE_INSTAMUERTE = 1.5
const INCREMENTO_FIJO_INSTAMUERTE = 2.4
const VIVO = true
const MUERTO = false
const PROBABILIDAD_BASE_ESQUIVAR_ATAQUE = 50
const DECREMENTO_FIJO_ESQUIVAR_ATAQUE = 11.875
const MAX_CODIGO1 = 0
const MIN_CODIGO1 = 3
const MIN_CODIGO2 = -100
const MAX_CODIGO2 = -70
const MIN_CODIGO3 = 4
const MAX_CODIGO3 = 12
/**
 * Probabilidad de morir de un golpe
 * @param {number} horrucrex_destruidos la cantidad
 * @returns si el jugador sigue vivo
 */
function muerte_instantanea(horrucrex_destruidos) {
    let estado_vida = VIVO
    let probabilidad = Math.random() * 100;
    console.log(probabilidad);
    console.log(PROBABILIDAD_BASE_INSTAMUERTE + INCREMENTO_FIJO_INSTAMUERTE * horrucrex_destruidos,"HOLAAAAA");
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
    let min = MIN_CODIGO1
    let max = MAX_CODIGO1
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
    min = MIN_CODIGO2
    max = MAX_CODIGO2
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numero_aleatorio
}
function generador_numero_aleatorio_codigo3(params) {
    min = MIN_CODIGO3
    max = MAX_CODIGO3
    numero_aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return numero_aleatorio
}
/**
 * genera un numero aleatorio del 97 a 101 correspondiente al codigo ascii entre a y e y despues se hace el cambio
 * @returns el numero aleatorio del codigo 4
 */
function generador_caracter_aleatorio_codigo4() {

    let numeroAleatorio = Math.floor(Math.random() * 5);

    //  (97 a 101)
    let codigoCaracter = 97 + numeroAleatorio;

    let codigo_letra = String.fromCharCode(codigoCaracter);

    return codigo_letra
}
function generador_caracter_aleatorio_codigo5() {

    let numeroAleatorio = Math.floor(Math.random() * 4);

    //  (72 a 75)
    let codigoCaracter = 72 + numeroAleatorio;

    let codigo_letra = String.fromCharCode(codigoCaracter);

    return codigo_letra
}



function main() {
    let horrucrex_destruidos = 0
    let codigo_1 = "R1dd13"
    let ingreso_codigo = ""
    let eleccion_esquivar = 0
    let codigo_2 = "G4unt!"
    let codigo_3_v1 = "H3l"
    let codigo_3_v2 = "ga!"
    let codigo_4 = "R4vena"
    let codigo_5 = "N@9ini"
    let puntos = {
        puntos_salud: 400,
        puntos_cordura: 200,
        puntos_turnos: 0,
    }



    do {
        if (horrucrex_destruidos == 0) {
            ({ ingreso_codigo, horrucrex_destruidos } = intentar_destruir_horrocruxes(codigo_1, horrucrex_destruidos, puntos))
        }else if (horrucrex_destruidos==1){
            console.log("fjdjfdjfdjfjdfjdfjdjf");
        }
        puntos.puntos_turnos++
        console.log("Turnos utilizados", puntos.puntos_turnos);
        console.log("Vida",puntos.puntos_salud);
        console.log("Cordura",puntos.puntos_cordura);
        
    } while (puntos.puntos_salud > 0 && puntos.puntos_cordura > 0 && puntos.puntos_turnos < 30 && muerte_instantanea(horrucrex_destruidos ) && horrucrex_destruidos < 5);

    /*  } else if (horrucrex_destruidos == 1) {
         console.log("Intenta adivinar el codigo");
         console.log("El codigo empieza con ?G4unt! donde ? es un numero aleatorio entre", MIN_CODIGO2, "y", MAX_CODIGO2);
         let codigo_real_2 = generador_numero_aleatorio_codigo2(); //borrar solo para comprobar el numero aleatorio
         console.log(codigo_real_2);
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
                     puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA);
                     console.log("Has esquivado el daño a tu salud");
                 } else {
                     puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                     console.log("Has esquivado el daño a tu cordura");
                 }
             } else {
                 console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                 puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                 puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA)
             } console.log("PUNTOS DE SALUD RESTANTES", puntos.puntos_salud);
             console.log("Puntos DE CORDURA RESTANTES", puntos.puntos_cordura);
         }
     } else if (horrucrex_destruidos == 2) {
         console.log("Intenta adivinar el codigo");
         console.log("El codigo es H3l?ga! donde ? es un numero aleatorio entre", MIN_CODIGO3, "y", MAX_CODIGO3);
         let codigo_real_3 = generador_numero_aleatorio_codigo3()
         console.log(codigo_real_3);
         ingreso_codigo = leer()
         if (ingreso_codigo == (codigo_3_v1 + codigo_real_3 + codigo_3_v2)) {
             horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos);
         } else {
             console.log("Has errado con el codigo");
             if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                 console.log("Gracias a tus dotes has logrado esquivar el ataque");
                 console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                 eleccion_esquivar = leer()
                 if (eleccion_esquivar == 1) {
                     puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA);
                     console.log("Has esquivado el daño a tu salud");

                 } else {
                     puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                     console.log("Has esquivado el daño a tu cordura");

                 }
             } else {
                 console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                 puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                 puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA)

             } console.log("PUNTOS DE SALUD RESTANTES", puntos.puntos_salud);
             console.log("Puntos DE CORDURA RESTANTES", puntos.puntos_cordura);
         }

     } else if (horrucrex_destruidos == 3) {
         console.log("Intenta adivinar el codigo");
         console.log("El codigo es ?R4vena donde ? es un caracter generado aleatoriaent entre a y e");
         let codigo_real_4 = generador_caracter_aleatorio_codigo4()
         ingreso_codigo = leer()
         console.log(codigo_real_4);
         if (ingreso_codigo == (codigo_real_4 + codigo_4)) {
             horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos)
         } else {
             console.log("Has errado con el codigo");
             if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                 console.log("Gracias a tus dotes has logrado esquivar el ataque");
                 console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                 eleccion_esquivar = leer()
                 if (eleccion_esquivar == 1) {
                     puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA);
                     console.log("Has esquivado el daño a tu salud");

                 } else {
                     puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                     console.log("Has esquivado el daño a tu cordura");

                 }
             } else {
                 console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                 puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                 puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA)

             } console.log("PUNTOS DE SALUD RESTANTES", puntos.puntos_salud);
             console.log("Puntos DE CORDURA RESTANTES", puntos.puntos_cordura);
         }
     } else if (horrucrex_destruidos == 4) {
         console.log("Intenta adivinar el codigo");
         console.log("el codigo es N@9ini? donde ? es un caracter generado aleatoriamente entre H y K");
         let codigo_real_5 = generador_caracter_aleatorio_codigo5()
         console.log(codigo_real_5);
         ingreso_codigo = leer()
         if (ingreso_codigo == (codigo_5 + codigo_real_5)) {
             horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos)
         } else {
             console.log("Has errado con el codigo");
             if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
                 console.log("Gracias a tus dotes has logrado esquivar el ataque");
                 console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
                 eleccion_esquivar = leer()
                 if (eleccion_esquivar == 1) {
                     puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA);
                     console.log("Has esquivado el daño a tu salud");

                 } else {
                     puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                     console.log("Has esquivado el daño a tu cordura");

                 }
             } else {
                 console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
                 puntos.puntos_salud = actualizar_puntos_de(puntos.puntos_salud, DAÑO_SALUD)
                 puntos.puntos_cordura = actualizar_puntos_de(puntos.puntos_cordura, DAÑO_CORDURA)

             } console.log("PUNTOS DE SALUD RESTANTES", puntos.puntos_salud);
             console.log("Puntos DE CORDURA RESTANTES", puntos.puntos_cordura);
         } */
if (horrucrex_destruidos == 5) {
    console.log(" ¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!");

} else {
    console.log("En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.");
}
}
main();
/**
 * pendiente..
 * @param {number} codigo el codigo secreto sin encriptar 
 * @param {number} horrucrex_destruidos actuales
 * @param {object} personaje a modificar sus puntos
 * @returns 
 */
function intentar_destruir_horrocruxes(codigo, horrucrex_destruidos, personaje) {
    let eleccion_esquivar = 0;
    let codigo_real = generador_numero_aleatorio_codigo1()
    let ingreso_codigo = "";
    console.log("Intenta adivinar el codigo");
    console.log("El codigo empieza con R1dd13? donde ? es un numero aleatorio entre", MIN_CODIGO1, "y", MAX_CODIGO1);
    console.log(codigo_real);
    ingreso_codigo = leer();
    if (ingreso_codigo == (codigo + String(codigo_real))) {
        horrucrex_destruidos = actualizacion_horrocruxes_eliminados(horrucrex_destruidos);
    } else {
        console.log("Has errado con el codigo");
        if (probabilidad_esquivar_ataque(horrucrex_destruidos) == true) {
            console.log("Gracias a tus dotes has logrado esquivar el ataque");
            console.log("Puedes elegir si esquivar el daño a tu salud(1) o a tu cordura(2): ");
            eleccion_esquivar = leer();
            if (eleccion_esquivar == 1) {
                personaje.puntos_cordura = actualizar_puntos_de(personaje.puntos_cordura, DAÑO_CORDURA);
                console.log("Has esquivado el daño a tu salud");

            } else {
                personaje.puntos_salud = actualizar_puntos_de(personaje.puntos_salud, DAÑO_SALUD);
                console.log("Has esquivado el daño a tu cordura");

            }
        } else {
            console.log("Has recibido daño se redujeron levemente tu salud y tu cordura");
            personaje.puntos_salud = actualizar_puntos_de(personaje.puntos_salud, DAÑO_SALUD);
            personaje.puntos_cordura = actualizar_puntos_de(personaje.puntos_cordura, DAÑO_CORDURA);

        } console.log("PUNTOS DE SALUD RESTANTES", personaje.puntos_salud);
        console.log("Puntos DE CORDURA RESTANTES", personaje.puntos_cordura);
    }
    return horrucrex_destruidos;
}

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

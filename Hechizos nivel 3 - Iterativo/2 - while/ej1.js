const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante
 *  de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades 
 * mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar
 hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu 
hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un 
ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, 
Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos
 mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort
  son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */


const NUM_PATRONUM_1 = 12
const NUM_PETRIFICUS_2 = 83
const NUM_CONFUNDUS_3 = 23
function main() {
    let num_hechizo_lanzado = 0
    let hechizo = "djkkd"
    let vida_voldemort = 300
    let vida_personaje = 200
    while ((vida_personaje > 0) && (vida_voldemort > 0)) {
        console.log("Que hechizo desea tirar1?: ");
        hechizo = leer()
        while (((hechizo != "Patronum") && (hechizo != "Confundus") && (hechizo != "Petrificius"))) {
            console.log("Hechizo no existente intentelo devuelta");
            console.log("Que hechizo desea tirar2?: ");
            hechizo = leer()

        }
        if (hechizo == "Patronum") {
            console.log("Has elegido el hechizo Patronum adivina el numero para infligir daño, caso contrario lo recibiras tu");
            console.log("Adivina el numero secreto");
            num_hechizo_lanzado = Number((leer))
            if (num_hechizo_lanzado == NUM_PATRONUM_1) {
                console.log("Bien has lanzado el hechizo correctamente");
                console.log("Has infligido 80 de daño");
                console.log("La vida de voldemort es:", vida_voldemort = vida_voldemort - 80);
            } else {
                console.log("Has errado el hechizo has recibido 80 de daño");
                console.log("Tu vida actual es:", vida_personaje = vida_personaje - 80);
            }
           
        }else  if (hechizo == "Petrificius") {
            console.log("Has elegido el hechizo Petrificius adivina el numero para infligir daño. cosantrario lo recibiras tu");
            console.log("Adivina el numero secreto");
            num_hechizo_lanzado = Number((leer))
            if (num_hechizo_lanzado == NUM_PETRIFICUS_2) {
                console.log("Bien has lanzado el hechizo correctamente");
                console.log("Has infligido 100 de daño");
                console.log("La vida de voldemort es", vida_voldemort = vida_voldemort - 100);
            } else {
                console.log("Has errado el hechizo has recibido 100 de daño");
                console.log("Tu vida actual es:", vida_personaje = vida_personaje - 100);
            }
            

        }else if (hechizo == "Confundus") {
            console.log("Has elegido el hechizo Confundus adivina el numero para infligir daño. cosantrario lo recibiras tu");
            console.log("Adivina el numero secreto");
            num_hechizo_lanzado = Number((leer))
            if (num_hechizo_lanzado == NUM_CONFUNDUS_3) {
                console.log("Bien has lanzado el hechizo correctamente");
                console.log("Has infligido 120 de daño");
                console.log("La vida de voldemort es", vida_voldemort = vida_voldemort - 120);
            } else {
                console.log("Has errado el hechizo has recibido 120 de daño");
                console.log("Tu vida actual es:", vida_personaje = vida_personaje - 120);
            }
        }


    }
    if (vida_voldemort <= 0) {
        console.log("Muy bien has ganado has derrotado a voldemort");
    } else {
        console.log("Has caido en manos de voldemort :C");
    }
}



main();
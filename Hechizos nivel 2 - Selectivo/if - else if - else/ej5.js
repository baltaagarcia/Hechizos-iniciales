const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */


function main() {
    let edad = 0
    let perimiso_padres = 0
    console.log("Cual es su edad?: ");
    edad=Number(leer());
    if (edad >= 17) {
        console.log("Puedes entrar a hogwarts")
    } else if ((edad < 17) && (edad > 13)) {
        console.log("Tienes el permiso de tus padres? 1PARA SI 2 PARA NO");
        perimiso_padres = Number(leer())
        if (perimiso_padres == 1) {
            console.log("Puedes entrar a Hogwarts");

        }

    }else{
        console.log("No puedes entrar a Hogwarts");
    }

}
main();
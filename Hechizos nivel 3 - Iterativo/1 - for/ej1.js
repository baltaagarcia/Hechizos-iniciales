const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia 
 * de manera efectiva. En la clase de Encantamientos, los estudiantes deben demostrar su habilidad 
 * para recordar y lanzar los hechizos correctamente. Ayuda a simular este proceso creando un programa
 *  que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo
 *  correctamente. Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y
 *  finalizará. Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos
 * , el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */


function main() {
    let nombre_hechizo
    

    
    for (let i = 0; i <  4 ; i++) {
        console.log("Ingrese el hechizo: ");
        nombre_hechizo=leer()
        if (nombre_hechizo=="Wingardium leviosa") {
            console.log("Acertaste el hechizo");
            i=4
        }else if (nombre_hechizo!="Wingardium leviosa"){
            console.log("Error intente denuevo INTENTO NRO:",i+1);
        }
        
    }
    
}


main(); 
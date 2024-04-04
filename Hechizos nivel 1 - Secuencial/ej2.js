const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */


function main() {
    let estudiantes=0
    let libros=0
    console.log("Cuantos estudiantes trajieron las varitas hoy? : ");
    estudiantes=Number(leer())
    console.log("Cuantos libros a usar hay?: ");
    libros=Number(leer())
    varitas=estudiantes*3
    cant_libros=libros*2
    console.log("La cantidad de ingredientes que se necesita son",varitas+cant_libros);
}


main();
const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts.
 *  Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para
 *  ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los 
 * estudiantes aprenderán a preparar una de las pociones más icónicas: la poción Multijugos. Para preparar
 *  esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente 
 * las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido,
 *  y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede
 *  avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente
 *  dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá 
 * interrumpido. Solo aquellos estudiantes que sean precisos y persistentes podrán dominar la 
 * preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */


function main() {
   let sanguijuelas_reventadas=0
   let cuerno_de_bicornio
   let pelo_gato
   let colas_serpiente

for (let i = 0; i < 1; i++) {
   console.log("Cuantas sanguijuelas reventadas desea usar: ");
   sanguijuelas_reventadas=leer()
   if ((sanguijuelas_reventadas <3)||(sanguijuelas_reventadas>3)) {
      i=2
      console.log("Has fallado con los ingredientes de la receta");
      
   }else{
      console.log("Muy bien vamos por el siguiente paso");
      console.log("*Agita la mezcla lentamente durante 30 segundos en direccion horaria");
   }  console.log("Ingrese la unidades de pulverizado de cuerno de Bicornio: ");
      cuerno_de_bicornio=leer()
      if ((cuerno_de_bicornio <5)||(cuerno_de_bicornio>5))  {
         i=2
         console.log("Has fallado con los ingredientes de la receta");
      
      }else{
         console.log("Muy bien estas ingresando correctamente los ingredientes, sigamos por el siguiente paso");
      }console.log("Ingresa la cantidad de pelo de gato negro: ");
      pelo_gato=leer()
      if ((pelo_gato <0)||(pelo_gato>1)) {
         i=1
         console.log("Has fallado con los ingredientes de la receta");
      
      }else{
         console.log("Muy bien solos nos falta un paso");
      }console.log("Por ultimo necesitamos las colas de serpiente cuantas desea agregar?: ñ");
      colas_serpiente=leer()}
      if ((colas_serpiente <1)||(colas_serpiente>2)) {
         i=2
         console.log("Has fallado Con los ingredientes de la receta");
         
      }else{
         console.log("Muy bien has cumplido con los ingredientes a la perfeccion!!!");
         console.log("Ahora solo debemos reposar la pocion durante 5 minutos para su uso");
         i=2
      }
         

   

}


main();
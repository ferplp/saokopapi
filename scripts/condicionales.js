console.log("... *ojitos sospechosos*");

let nombre = "Rafa";
let ciudad = "Guadalajara"

////+++++++ Declaración de bloque ++++++++++
{
    let nombre = "Fer";
    let ciudad = "CDmx";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, y vivo en ${ciudad}`);
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`);


//********** Condicional If **/
/**
 * Sintaxis
 *      if (condicionVerdadera ) instruccion;
 * 
 *      if (condicionVerdadera ) {
 *       instrucciones;
*   }
 */

let edad = 23;
console.log("*** Declaracion antes del if ----->");

if (edad >=25) console.log("La edad es mayor a 25");
else {
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}

console.log("<---- Declaración después del if **");


//********** Operador ternario **/
/**
 * sintaxis:  condicion ? condicion_verdadera : condicion_falsa
 */

console.log(`La edad es ${edad>24 ? "mayor":"menor"} a 25 `);
console.log(`La edad es ${edad ===25 ? "igual" : (edad>24 ? "mayor":"menor")} a 25`);

//******* Condicional if, else if, else  *****/
/**
 * Sintaxis
 * 
 *      if (condicionVerdadera ) {
 *       instrucciones;
 *      }
 *      else if (otra condicion) {
 *      }
 *      else if (otra condicion){
 *      }
 *      else {
 *      instrucciones;
 *       }
 */


console.log("**** ---> Uso de if, else if, else")
edad=25 

if (edad>24){console.log("La edad es mayor a 25");
} else if (edad ===25) {
    console.log("La edad es 25");
} else console.log("La edad es menor a 25");


//* Clari 
if (edad ===25) comparacion = "igual";
else if (edad >24) comparacion = "mayor";
else comparacion = "menor";

console.log(`La edad es ${comparacion} a 25`);


//*********** Condicional switch *********/
/**
 * Síntaxis:
 *      switch(expresion){
 *      case valor1:
 *          instrucciones;
 *          break;
 *      case valor2:
 *          instrucciones;
 *          break;
 *      case valor3:
 *          instrucciones;
 *          break;
 *          default:
 *              instrucciones;
 * }
 */
edad= 20;
comparacion="";

switch(edad){
    case 25:
        comparacion="es igual";
        break;
    case 24: 
        comparacion="es menor";
        break;
    case 26: case 27: case 28:
        comparacion="es mayor";
        break;
    default:
        comparacion="No lo sé, bb";    
}

console.log (`(swith) La edad es ${ comparacion } a 25`);

let valor = Math.sign(25 - edad);

switch (valor) {
    case -1:
        comparacion = "mayor";
        break;
 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);


//* Ejemplo 
let numeroMes = 10;
estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    estacion = "Invierno";
    break;
  case 1:
    mes = "Enero";
    estacion = "Invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion = "Primavera";
    break;
  case 4:
    mes = "Abril";
    estacion = "Primavera";
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion= "Verano";
    break;
  case 7:
    mes = "Julio";
    estacion= "Verano";
    break;
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
    estacion = "Otoño"
  case 10:
    mes = "Octubre";
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

mes=10
estación=""

if (mes === 12 || mes === 1 || mes === 2){console.log("La estación es invierno");
} else if (mes=== 3 || mes === 4 || mes===5) {console.log("La estación es Primavera");
} else if (mes ===6 || mes ===7 || mes=== 8){ console.log("La estación es Verano");
} else if (mes ===9|| mes===10 || mes===11){ console.log ("La estación es Otoño");}

let online = true;
let active = true;
if(online) {
  if (active) {
    console.log('James')
  }
}
 online && active && console.log('James')
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
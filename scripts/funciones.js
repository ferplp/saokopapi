console.log("Sesion JS02 funciones");
//++++++ Función declarada ++++++++
//ladado de la función declarada
/**
 * Ejemplo de 1 función declarada 
 * (function delcaration, function statemet).
 * Realiza la multiplicacion de 2 números
 * Una caracteristica de las funciones declaradas
 * es que tiene un hoisting (elevación)
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicación de a*b
 */

function multiplica( a, b) {
//let multiplica = a*b;
//return multiplica
return a*b
}
//llamado de de la función declarada.
console.log("multiplica 5 * 6 = " + multiplica(5,6));
//+++++++++++++++Función expresada++++++++
/**
 * Las funciones expresadad (function expressions)
 * son declaradas dentro de la asignación de una variable.
 * 
 * Estas funciones pueden ser anonimas (s/ nombre)
 * Las funciones expresadas no tiene hoistin
 */

/**
 * sumatoria de numeros
 * @param {*} a 
 * @param {*} b 
 * @returns resultado a+b
 */
const suma = function ( a, b){ return a+b;}

console.log("El resultado de 56 + 4 = " + suma(56,4));

//++++++++++++ Funciones autoinvocadas +++++++++++++

/**
 * Las funciones autoinvocadas(self-invoking functions)
 * pueden ser anónimas y se autoejecutan() en su declaración
 */

(function(){
    console.log("=======");
    console.log("Hola crayoli");
    console.log("========");
})();
// ++++++++++ Función flecha ++++
/**
 * Las funciones flecha (arrow functions) son símilares a 
 * las funciones declaradas pero no requieren la palabra
 * "function" y si tienen una sola instrucción
 * y es el retorno, no requiere la instrucción "return".
 */

/** Realiza la operación de 2 números
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns resta de a-b
 */
const resta = (a,b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));

// ++++++++++++++ Parametros default +++++++++++
/**
 * Función con parámetros inicializados
 */
function divide(a,b=0){
    return a/b;
}

console.log("La división de a/b = " + divide(4));

//++++++++++++++++ Funciones recursivas +++++++
function factorial(num){
    if(num<=0) return 1;
    return(num* factorial(num-1));
}

console.log("Factorial de 5 = " + factorial(5));
console.log("Sesion J04 ciclos");
// Se recomienda declarar un arreglo u objeto con
// cons ya que se evita que se cambie el *tipo* de dato:

let arrayLet = [1,2,4,5];
const myArray =[10,11,12];

//arrayLet = // se puede dar un diferente valor, let no "proteje".
//myArray = // no se puede dar un diferente valor, ya fue declarado.
console.log(arrayLet);
console.log(myArray);

myArray.push("Holitas");
myArray[myArray.length]="holitas 2"

function reemplazar (myArray){
for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] === "holitas 2") myArray[index] = "Fer";
}
return myArray;
}

console.log(reemplazar (myArray));

//Rafa 2.0
function reemplazarR(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace); // si no existe, retorna -1
    if (index>-1)myArray[index] = newString;
    return myArray;
}
console.log(reemplazarR(myArray, "xd456", "Rafa"));

//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);





/**
 * FIFOOOO 
 * FIRST IMPUT FIRS OUT
 * E3 E2 E1 -----> [arreglo] ------> E3 E2 E1 
 * E3 E2 E1 -----> [arreglo] ------> E1 E2 E3 
 */

const perecederos = ["manzanas", "quesos","fresas"];

// Agregamos un elemento al inicio del arreglo:
perecederos.push("leche"); // ahora 4o elemento
console.log(perecederos);
//Sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: " + perecederos.shift() );
console.log(perecederos);


// LIFOOOO
console.log("n/-----LIFO---")
const tienda = [...perecederos];
console.log(tienda);


// agregamos un elemento al final del arreglo:
tienda.push("el amor");
console.log(tienda);
//sacamos el ultimo elemento
console.log("Elemnto eliminado: " + tienda.pop());
console.log(tienda);


//--------------------------------------------------------
console.log("##### Calccular el factorial de un número ######");

//--------------------------------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');

const traba = ["Pepe Pecas Pica Pacas"]

console.log (Number(traba.map(traba("e")=== "e")));

console.log(countE("Pepe Pecas Pica Papas"));
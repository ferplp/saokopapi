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


Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b)

Array.from(`pepe pecas pica papas pero`).map(element=> element == "p")

/**
 * funcion split separa segun un caracter que le indiques(lo quita), en blanclo (" ") los separa uno por uno
 */

//`pepe pecas pica papas pero`.split("");


//`pepe pecas pica papas pero`.split("").filter(elemento => elemento === "p").length;

// filter --> nuevo arreglo, que cumpla la condicion.
let ch18 = ["Abelardo", "Audery", "Angel", "Sharon", "Bren", "Pato Lucas", "Victor"];
//for (let i = 0; i< ch18.length; i++) {
  //  if (ch18[i] ==="Pato Lucas"){
    //    console.warn("Atención, ya está vetade: " + ch18[i]);
      //  break;
    //}
    //console.log("Persona de ch19: " + ch18[i]);
    
//}


for (let i = 0; i< ch18.length; i++) {
    if( ch18[i] !== "Pato Luchas"){
        continue;
    }
    console.warn("Esta persona no esta en la ch18: " + ch18[i] );
    
}

const generetion = [
    ["Abelardo", "Audrey", "Angel", "Sharon",] , 
    ["Yesii", "Mariana","Karen"] ,
    ["Karla", ]
]

//for (let i = 0; i < generation.length; i++) {
  //  for (let j = 0; j < generation[i].length; j++) {
    //  if(generation[i][j] == 'El bromas'){
      //  console.warn(`El bromas se encuentra en la corte ${i+1} en la posicion ${j+1} `);
      //}
    //}
  //}
/// +++++ Ciclo While +++++

console.log("n##### ciclo while ###");
/**
 * sintaxis:
 *      while(condicion){
 *          instruccion;
 * }
 */

let findNumber=true;
let number = 1;
while (findNumber){
    if (confirm(`¿El número es ${number}?` ) ) {
        findNumber=false;
        alert(`Fantastico, tu número es el ${number}`)
}
else if (number>10){
    findNumber=false ;
    alert(`Humano, no sabes jugar`);
}
}


/**
 * to while 
 * se hace, después preguntas
 */
let bandera = false;

while(bandera){
    console.log("Mensaje dentro del ciclo while");
}

//// Muchas instrucciones 
//--------------------------

do{
    console.log("Mensaje dentro del do-while")
} while( bandera);

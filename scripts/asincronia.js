console.log("JS07 ASINCRONIA");

console.log("01 - Primera instrucción");

//setTimeout(funcion callback, tiempo_para_ejecutar(miliseg-ms));
// setTimeout(  ()=>console.log("01.5 olitas de mar") , 3000);
const temporalizador = (retardo,msj)=>{
    setTimeout( ()=>console.log(msj),retardo);
}

const intervalo =( tiempo, msj )=>{
    setInterval(()=>console.log(msj),tiempo)
}

temporalizador(0100, "02 segunda instrucción");
//intervalo(2000, "Ahí vas, padrino");

console.log("03 tercera instrucción");

/// API Fetch. Asincrona /lo que responde del url se va al then 
console.log("Antes de la solicitud fetch");

function solicitudFetch(userToFind){
    fetch("https://reqres.in/api/users?delay=3")

    .then(response=>response.json() )
    .then(conversion=>{
      //  console.log(conversion);
    //Buscando imprimir nombre y correo 
    //console.log(conversion.data[0].first_name);
    //console.log(conversion.data[0].email);

    let encontrado =conversion.data.find(
        (data)=>data.first_name==userToFind
        );
        console.log(encontrado);
        let objUser= document.getElementById("user-name");
        let objEmail= document.getElementById("user-email");
        objUser.value= encontrado.first_name;
        objEmail.value= encontrado.email;
        usarLocalStorage();
        return "hola";
        
    })
    .then(msj => console.log("Retorno del then anterior: " + msj))
    .catch ( err => {
        console.log(err);
    });
     
    

}

function leerUsuario(usuario){
    console.log("Usuario a buscar: " + usuario);
    const user = JSON.parse( localStorage.getItem("user") );
    if(user && user.time>Date.now()){
        leerLocalStorage();

    }
    else{
        solicitudFetch(usuario);

    }
}

function usarLocalStorage(){
    let objUser= document.getElementById("user-name");
    let objEmail= document.getElementById("user-email");
    //localStorage.setItem('clave', valor);
    let user = {
        name:objUser.value,
        email:objEmail.value,
        time:  Date.now()+60000// leer tiempo actual y sumarle 1 min
    }
    localStorage.setItem('name', objUser.value);
    localStorage.setItem('email', objEmail.value);
    //pa' convertir un obj a JSON: JSON.stringify(obj)
    localStorage.setItem('user', JSON.stringify(user));


}

function leerLocalStorage(){
    const objUser= document.getElementById("user-name");
    const objEmail= document.getElementById("user-email");
    //convertir de JSON a obj : JSON.parse(texto);
    const user = JSON.parse( localStorage.getItem("user") );
    console.log(user);
    objUser.value= user.name;
    objEmail.value= user.email;
}





/** crear nuestra promesa 
 * new promese (función flecha 2 parametros: resolve, rejet 
 * (se puede cambiar nombre pero la posicion indica su respuesta))=>
 * resolve: promesa cumplida
 * rejet: cuando no se cumple la promesa
*/
function miPromesa(){
    let promesa = new Promise((resolve, reject) => {
        const expresion = true; // cualquier operación, devuelve cualquier tipo de dato
        if (expresion) resolve ("La promesa fue exitosa");
        else reject ("La promesa no se cumplió </3");

    });
    promesa
    .then(  response => console.log(response))
    .catch(error=> console.log(error))
    .finally(console.log("Se terminó de ejecutar la promesa"));
}

//miPromesa();

let division = (a, b)=>{
    return new Promise (( resolve, reject)=>{
        if (b!== 0) resolve(a/b);
      else reject("No se puede realizar una division entre cero :(");
    } );
}

//division(4,0)
//.then(resultado => console.log ("Resultado de la div = " + resultado) )
//.catch(error => console.log("error en la division: " + error));


// Async, await / En operaciones async await se debe emplear try-catch en lugar de then y catch
async function operaciones(){
    // Los bloques try y catch nos sirven para el manejo de errores
    try{
      const result1 = await division(4,0);
      console.log("el resultado de la division es = "+result1);
    }
    catch (error){
      console.log("No se puedo realizar la division: "+error);
    }
    try{
      const result2 = await division(4,2);
      console.log("el resultado de la division es = "+result2);
    }catch (error){
      console.log("No se puedo realizar la division: "+error);
    }
  }
  operaciones();
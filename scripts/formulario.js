console.log("Sesion JS06");


//const form = document.getElementById("registro");
const objForm = document.forms["registro"];

objForm.addEventListener('submit', event =>{
    event.preventDefault();
    console.log("El evento submit se ha generado");
    let email = objForm.elements['inputEmail4'].value;
    console.log(email);
    console.log(objForm.elements['inputPassword4'].value);
}); 

// se adiciona el evento submit y la funcion flecha
    
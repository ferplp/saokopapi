console.log("Sesion JS06 DOM");

//encontrarPorID();
//encontrarPorClase();
cambiarEstilo();
crearElemento();

function encontrarPorID(){
    //Obtenemos el objeto a través de su ID
    const element = document.getElementById ("titulo-h1");
    console.log("Datos del elemento: " + element.innerHTML);
    // cambiamos los datos del objeto
    element.innerHTML="El <em>texto</em> en el título es: "
    + element.innerHTML;
}

// obtener por tag
function encontrarPorTag(){
    const elements = document.getElementsByTagName("p");
    console.log("Elementos encontrados: " + elements.length);

    //obtenemos el elemento del indice 1;
let parrafo = elements[1].innerHTML;
console.log("Contenido en p[1]: " + parrafo);
}

function encontrarPorClase(){
    const elements = document.getElementsByClassName("intro");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML = "Reacciones Pro";
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("h3>.color");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML = "ganas de comprar";
}

function cambiarEstilo(){
    const elements = document.querySelectorAll("p>.color");
    elements[0].style.color="red";
}

function crearElemento(){
    const nuevoElemento = document.createElement ("p");
    nuevoElemento.innerHTML = "Este es un nuevo <strong>párrafo</strong>" //<p></p>
    document.getElementById("titulo").appendChild(nuevoElemento); //Aquí se inserta el nuevo elemento que creamos
}
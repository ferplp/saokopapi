console.log("Sesion JS08");
const miArreglo = [5, 7, 3, 2];
const miArregloConstructor = new Array(5, 7, 3, 2); // así vamos a declarar adelante 

console.log(miArreglo);
console.log(miArregloConstructor);

// propiedades de mi arreglo
console.log(miArreglo.length);
console.log(miArregloConstructor.length);
//Métdo del arreglo
console.log(miArreglo.sort());
console.log(miArregloConstructor.sort());

//------------------------------------
let coraline = {
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre: "Dakota Fanning",
            pais: "USA"
        }
    ],
    directores: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /*
    mostrarActores:()=>{
        coraline.actores.forEach( info =>
             console.log(`${info.nombre} del país ${info.pais}`) )
    }  */
    mostrarActores: function () {
        //La palabra reservada this (no aplica en la función flecha) hace referencia al objeto que invoque
        this.actores.forEach((info) =>
            console.log(`${info.nombre} del pais ${info.pais}`)
        );
    },
    /**
     * Mostrar todos los datos
     */
    mostrarTodaInfo: function () {
        console.log(this.nombre);
        console.log(this.duracion);
        this.genero.forEach((info) => {
            console.log(`Genero: ${info}`);
        });
        console.log(this.clasificacion);
        console.log('Actores');
        this.mostrarActores();
        console.log(`Director: ${this.director.nombre} del pais ${this.director.pais}`);
    }
}
console.log("Pelicula: " + coraline.nombre);
coraline.actores.forEach(info => {
    console.log(`Actor: ${info.nombre}, del país ${info.pais}`);
})

console.log("Fue dirigida por: " + coraline.directores.nombre);

//Cambiando la clasificación:
coraline.clasificacion = "C"
console.log("Clasificación: " + coraline.clasificacion);

//Agregando al actor: Ian McShane de UK, Daw French de UK
coraline.actores.push({ nombre: "Ian McShane", pais: "UK" });
coraline.actores.push({ nombre: "Daw French", pais: "UK" });

//iteramos los actores
//console.log("Pelicula: " + coraline.nombre);
//coraline.actores.forEach( info=>{
//    console.log(`Actor: ${info.nombre}, del país ${info.pais}`);
//})
coraline.mostrarActores();
coraline.mostrarTodaInfo();

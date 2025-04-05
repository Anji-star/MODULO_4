/*var nombre = "Juan Perez";

nombre = "Adolfito Suarez"

function mostrarNombre (){
    var nombre="Jose Hernandez"
    console.log(nombre);
}*/

const nombre = "Juan perez";

// nombre = "Jose Hernández" - NO LO PERMITE
/* const mostrarNombre = function (){
    console.log(nombre)
}  PROTEGE DE UNA REDECLARACIÓN */

    let nombre_alt = "Juan Pérez"
    nombre_alt = "José Hernández"
    function mostrarNombre (){
        let nombre_func="Juan Pérez"; /*solo funciona dentro */
        console.log(nombre_alt)
    }
    
    mostrarNombre();
    
    console.log(pais);
    var pais= "México";
    console.log(pais);
    
    function pruebaVar() {
        let ciudad = "Madrid";
        if (true) {
            console.log(ciudad)
        }
        console.log(ciudad); // Debería dar error, pero imprime "Madrid" debido a `var`
    }
    
    pruebaVar();
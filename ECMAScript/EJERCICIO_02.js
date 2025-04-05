class Usuario {
    constructor(alergias, comodidad, edad) {
        this.alergias = alergias;
        this.comodidad = comodidad;
        this.edad = edad;
    }

    // Método dentro de la clase
    mostrarInfo() {
        console.log(`
            Alergias: ${this.alergias}, 
            Comodidad: ${this.comodidad}, 
            Edad: ${this.edad}`);
    }
}

let usuario2 = new Usuario("Ninguna", "Media", 25);
usuario2.mostrarInfo();

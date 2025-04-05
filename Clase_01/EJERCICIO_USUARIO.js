class Usuario {
    constructor(nombre, preferencia, edad, correo, saldo = 0) {
        this.nombre = nombre;
        this.preferencia = preferencia; // Preferencia de asientos
        this.edad = edad;
        this.correo = correo;
        this.saldo = saldo;
        this.viajesRealizados = [];
    }

    mostrarInfo() {
        console.log(`
            Nombre: ${this.nombre} \n
            Preferencia: ${this.preferencia} \n
            Edad: ${this.edad}\n
            Correo: ${this.correo}\n
            Saldo actual: $${this.saldo} MXN\n
            Viajes realizados: ${this.viajesRealizados.length}
        `);
    }

    enviarInfoViajeCorreo(viaje) {
        console.log(`Enviando información del viaje a ${this.correo}...`);
        console.log(`
            Correo enviado a: ${this.correo}
            Origen: ${viaje.origen}
            Destino: ${viaje.destino}
            Duración: ${viaje.duracion} minutos
            Estado: Confirmado
        `);
    }

    checkIn(viaje) {
        console.log(`Check-in realizado para el viaje de ${viaje.origen} a ${viaje.destino}. ¡Buen viaje, ${this.nombre}!`);
    }

    esMayorDeEdad() {
        console.log(this.edad >= 18 ? `${this.nombre} es mayor de edad.` : `${this.nombre} es menor de edad.`);
    }
}

// Crear un usuario 
const usuario1 = new Usuario("José Hernández", "ventana", 30, "jose@example.com");

usuario1.mostrarInfo();

const viaje1 = {
    origen: "Ciudad de México",
    destino: "Guadalajara",
    duracion: 45
};

usuario1.checkIn(viaje1);
usuario1.enviarInfoViajeCorreo(viaje1);
usuario1.esMayorDeEdad();

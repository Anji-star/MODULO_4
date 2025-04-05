class Viaje {
    saludo="Bienvenido al Planificador de Viajes"
    constructor(destino, origen, duracion, distancia){
        this.destino = destino;
        this.origen = origen;
        this.duracion=duracion;
        this.distancia=distancia;
    }

    getInfo() {
        console.log(`
            Origen: ${this.origen}\n
            Destino: ${this.destino}\n
            Duración: ${this.duracion} min
            Distancia: ${this.distancia} Km
            `)
    }

    getCost(){
        console.log(`El costo del viaje es $${this.distancia*20} MXN`)
    }

static mensajeBienvenida(){
        console.log(this.saludo);
    }
}

class ViajeInternacional extends Viaje{
    constructor(origen, destino, duracion, distancia,pais){
        super(origen, destino, duracion, distancia); //Llamar al cosntructor del padre
        this.pais=pais; //nueva variable
    }

    mostraInfo(){
        console.log(`
            Destino: ${this.destino}\n
            País: ${this.pais}
            `);
    }
}



const viajeInt1=new ViajeInternacional("Cairo", "CDMX", 900, 12400, "Egipto");
viajeInt1.getCost();
viajeInt1.getInfo();
viajeInt1.mostraInfo();

const viaje1=new Viaje("Guadalajara", "CDMX", "60", "553")
const viaje2=new Viaje("CDMX", "Guadalajara", "65","553")

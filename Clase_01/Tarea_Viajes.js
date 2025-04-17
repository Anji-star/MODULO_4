// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};
// Función para calcular el costo del viaje

const costosDestino = {
    Paris: 500,
    Londres: 400,
    "New York": 600
};

// Costos adicionales por transporte
const costosTransporte = {
    Avión: 200,
    Tren: 100
};

function calcularCosto(destino, transporte) {
    const costoD = costosDestino[destino] || 0;
    const costoT = costosTransporte[transporte] || 0;
    return costoD + costoT;
}

// Función para mostrar el itinerario de los viajes registrados
function mostrarItinerario() {
    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    console.log("Itinerario de viajes:");
    console.log("=======================");

    destinos.forEach((viaje, index) => {
        console.log(`Viaje ${index + 1}:`);
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo} MXN`);
        console.log("---------------------------");
    });
}

registrarDestino("Paris", "2025-06-01", "Avión");
registrarDestino("Londres", "2025-06-10", "Tren");

mostrarItinerario();


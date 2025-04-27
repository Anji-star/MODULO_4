function encontrar(invitados) {
    let i = 0;
    let j = 1;

    while (j < invitados.length) {
        if (invitados[i][0] === invitados[j][0]) {
            return [invitados[i], invitados[j]];
        }
        i++;
        j++;
    }
    return null;
}

// Ejemplo 
const invitados = ['Ana', 'Carlos', 'Camila', 'Diego', 'Esteban', 'Juan'];
const resultado = encontrar(invitados);
if (resultado) {
    console.log(`Los invitados que pueden sentarse juntos son: ${resultado.join(' y ')}`);
} else {
    console.log("No hay invitados con iniciales iguales.");
}

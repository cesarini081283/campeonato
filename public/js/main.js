let equipos = {
    "Junior": { goles: 0, puntos: 0 },
    "América": { goles: 0, puntos: 0 }
};

function asignarPuntosEquipo(equipo, golesLocal, golesVisitante) {
    if (golesLocal > golesVisitante) {
        equipos[equipo].puntos += 3; // Gana el equipo
    } else if (golesLocal === golesVisitante) {
        equipos[equipo].puntos += 1; // Empate
    }
    // No se suma ningún punto si el equipo pierde
}

function registrarResultado() {
    const equipoLocal = document.getElementById('equipo-local').value;
    const golesLocal = parseInt(document.getElementById('goles-local').value);
    const equipoVisitante = document.getElementById('equipo-visitante').value;
    const golesVisitante = parseInt(document.getElementById('goles-visitante').value);

    equipos[equipoLocal].goles += golesLocal;
    equipos[equipoLocal].puntos += (golesLocal > golesVisitante) ? 3 : (golesLocal === golesVisitante) ? 1 : 0;

    equipos[equipoVisitante].goles += golesVisitante;
    equipos[equipoVisitante].puntos += (golesVisitante > golesLocal) ? 3 : (golesVisitante === golesLocal) ? 1 : 0;

    actualizarTablaPosiciones(); // Llamar a la función para actualizar la tabla

    return false;
}

function actualizarTablaPosiciones() {
    // Obtener las celdas de la tabla por su ID
    const golesEquipo1 = document.getElementById('goles-equipo1');
    const puntosEquipo1 = document.getElementById('puntos-equipo1');
    const golesEquipo2 = document.getElementById('goles-equipo2');
    const puntosEquipo2 = document.getElementById('puntos-equipo2');

    // Actualizar los valores de las celdas con los datos de los equipos
    golesEquipo1.textContent = equipos['Junior'].goles;
    puntosEquipo1.textContent = equipos['Junior'].puntos;
    golesEquipo2.textContent = equipos['América'].goles;
    puntosEquipo2.textContent = equipos['América'].puntos;
}

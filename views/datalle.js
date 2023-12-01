document.addEventListener("DOMContentLoaded", async () => {
    const chipidDiv = document.getElementById("chipid");

    const chipid = chipidDiv.textContent.trim();

    const response = await fetch(`../estaciones.php`);
    const data = await response.json();

    const estacionSeleccionada = data.find(estacion => estacion[1] === chipid);

    estacion_apodo.textContent = `Apodo: ${estacionSeleccionada[3]}`;
    estacion_ubicacion.textContent = `Ubicación: ${estacionSeleccionada[2]}`;
});

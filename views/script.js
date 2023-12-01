document.addEventListener("DOMContentLoaded", async () => {
    const listado = document.getElementById("station-list");

    async function obtenerEstaciones() {
        const response = await fetch('../estaciones.php');
        const datos = await response.json();
        return datos;
    }
    const estaciones = await obtenerEstaciones();
    estaciones.forEach(estacion => {
        const divEstacion = document.createElement("div");
        divEstacion.classList.add("station");

        divEstacion.innerHTML = `
            <p>${estacion[3]}</p>
            <p>${estacion[2]}</p>
            <p>Visitas: ${estacion[5]}</p>`;

        divEstacion.addEventListener("click", () => {
            window.location.href = `detalle.php?chipid=${estacion[1]}`;
        });
        listado.appendChild(divEstacion);
    });
});

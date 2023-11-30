<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalles</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <center>
        <h1>Detalle de la Estación</h1>
        <div id="chipid" style="display: none;">
            <?php
                echo $_GET['chipid'];
            ?>
        </div>

        <canvas id="temperaturaChart" width="400" height="200"></canvas>
        <canvas id="humedadChart" width="400" height="200"></canvas>
        <canvas id="vientoChart" width="400" height="200"></canvas>
        <canvas id="presionChart" width="400" height="200"></canvas>
        <canvas id="riesgoIncendioChart" width="400" height="200"></canvas>

        <p id="estacion_apodo"> </p>
        <p id="estacion_ubicacion"> </p>
    </center>
    <script src="datalle.js"></script>
</body>
</html>
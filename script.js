document.addEventListener("DOMContentLoaded", function() {
    // Coordenadas centrales de Costa Azul
    const coordenadas = [4.737356438328373, -74.09879270461154];

    // Crear el mapa en el div con id "map"
    var map = L.map('map').setView(coordenadas, 15);

    // Cargar el mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Agregar un marcador en las coordenadas principales
    L.marker(coordenadas).addTo(map)
        .bindPopup("<b>Costa Azul</b><br>Suba, Bogotá.")
        .openPopup();

    // Cargar el polígono desde CostaAzul.geojson
    fetch("CostaAzul.geojson")
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: {
                    color: "blue",  // Color del borde
                    weight: 2,       // Grosor de la línea
                    fillColor: "cyan", // Color de relleno
                    fillOpacity: 0.4  // Opacidad del relleno
                }
            }).addTo(map);
        })
        .catch(error => console.error("Error al cargar el GeoJSON:", error));
});

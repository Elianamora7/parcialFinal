document.addEventListener("DOMContentLoaded", function() {
    // ------------------- MAPA DE COSTA AZUL -------------------

    // Coordenadas centrales de Costa Azul
    const coordenadasCosta = [4.737356438328373, -74.09879270461154];

    // Crear el mapa de Costa Azul
    var mapCosta = L.map('map-costa').setView(coordenadasCosta, 15);

    // Cargar mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapCosta);

    // Agregar un marcador en Costa Azul
    L.marker(coordenadasCosta).addTo(mapCosta)
        .bindPopup("<b>Costa Azul</b><br>Suba, Bogotá.")
        .openPopup();

    // Cargar el polígono de Costa Azul desde CostaAzul.geojson
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
            }).addTo(mapCosta);
        })
        .catch(error => console.error("Error al cargar CostaAzul.geojson:", error));

    // ------------------- MAPA DE SUBA -------------------

    // Coordenadas centrales de Suba
    const centroSuba = [4.737356438328373, -74.09879270461154];

    // Crear el mapa de Suba
    var mapSuba = L.map('map-suba').setView(centroSuba, 12);

    // Cargar mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(mapSuba);

    // Cargar el polígono de Suba desde suba.geojson
    fetch("suba.geojson")
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                style: {
                    color: "red",  // Color del borde
                    weight: 2,       // Grosor de la línea
                    fillColor: "orange", // Color de relleno
                    fillOpacity: 0.4  // Opacidad del relleno
                }
            }).addTo(mapSuba);
        })
        .catch(error => console.error("Error al cargar suba.geojson:", error));
});





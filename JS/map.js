require('dotenv').config();
const mapKey = process.env.MAPKEY;

async function loadGoogleMapsScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    })
}

async function initApp() {
    try {
        //Carrega o script do GMaps manualmente
        await loadGoogleMapsScript();
    }
    //Inicializa o app
    catch (error) {
        console.error('Erro ao carregar o mapa: ', error);
    }
}

window.initMap = function () {
    const maps = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 12,
    })
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        map.setCenter(userLocation)

    })
}
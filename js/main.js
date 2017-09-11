const app = {
    item: {
        longitud: undefined,
        latitud: undefined,
    },
    initMap: function () {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: { <!--Centrado en Peru-->   
                lat: -9.1191427,
                lng: -77.0349046
            },
            mapTypeControl: false, <!--mapa o satelite-->
            zoomControl: false, <!--del mapa-->
            streetViewControl: false <!--Personita al lado izquierdo-->
        });
        app.setup()
    },

    setup: function () {
        $('#encuentrame').click(app.buscar);
    },

    buscar: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(app.funcionExito, app.funcionError)
        }
    },
    funcionExito: function (posicion) {
        app.item.latitud = posicion.coords.latitude;
        app.item.longitud = posicion.coords.longitude;
        let miUbicacion = new google.maps.Marker({
            position: {
                lat: app.item.latitud,
                lng: app.item.longitud,
            },
            animation: google.maps.Animation.DROP,
            map: map,
        });
        map.setZoom(17);
        map.setCenter({
            lat: app.item.latitud,
            lng: app.item.longitud
        });


    },
    funcionError: function (error) {
        alert('Tenemos un problema con encontrar tu ubicacion');

    }
};
$(document).ready(app.initMap);
/*
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { <!--Centrado en Peru-->
            lat: -9.1191427,
            lng: -77.0349046
        },
        mapTypeControl: false, <!--mapa o satelite-->
        zoomControl: false, <!--del mapa-->
        streetViewControl: false <!--Personita al lado izquierdo-->
    });

    function buscar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(funcionExito, funcionError)
        }
    }

    document.getElementById('encuentrame').addEventListener('click', buscar);
    var latitud, longitud;

    var funcionExito = function (posicion) {
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;
        var miUbicacion = new google.maps.Marker({
            position: {
                lat: latitud,
                lng: longitud
            },
            animation: google.maps.Animation.DROP,
            map: map
        });
        map.setZoom(17);
        map.setCenter({
            lat: latitud,
            lng: longitud
        });

    }
    var funcionError = function (error) {
        alert('Tenemos un problema con encontrar tu ubicacion');
    }
}
*/

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icons from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
    useEffect(() => {
        map()
    }, [])

    let map = () => {
        let mymap = L.map('mapid', {
            center: [40.423, 49.840],
            zoom: 16
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mymap);

        let myIcon = L.icon({
            iconUrl: icons,
            shadowUrl: iconShadow,
            iconSize: null,
            shadowSize: null,
            iconSize: [22, 37],
            shadowSize: [40, 54],
            iconAnchor: [5, 34],
            shadowAnchor: [4, 62],
            popupAnchor: [5, -34],
        });

        L.marker([40.4240, 49.8386], { icon: myIcon }).addTo(mymap)
            .bindPopup('<b>Dima</b>,<br>if you wanna visit Baku,<br>you can be my guest)))')
    }

    return (
        <div id={'mapid'}>
        </div>
    )
}

export default Map;






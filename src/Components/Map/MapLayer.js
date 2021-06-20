import React from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapLayer = ({ value }) => {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(value);

    return (
        <>
        </>
    )
}
export default MapLayer;


import React, { useContext } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContext } from "../MapContext";

const MapLayer = () => {
    let value = useContext(MapContext);
    if (value !== undefined) {
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(value);
    }

    return (
        <>
        </>
    )
}

export default MapLayer;


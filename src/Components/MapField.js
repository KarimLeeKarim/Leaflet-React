import React, { useEffect } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapField = ({ mapID, initialPosition, initialZoom, layer, marker }) => {
    useEffect(() => {
        bindMap()
    }, []);

    let bindMap = () => {
        let mapField = L.map(mapID, {
            center: initialPosition,
            zoom: initialZoom,
            layer,
            marker,
        });
        layer.addTo(mapField);
        marker.addTo(mapField)
    }

    return <div id={mapID}></div>
}
export default MapField;
import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapLayer from './MapLayer';
import MapMarker from './MapMarker';

const Map = () => {
    return (
        <>
            <MapLayer />
            <MapMarker />
        </>
    )
}
export default Map;
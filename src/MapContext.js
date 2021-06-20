import React, { createContext, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapContext = createContext();

const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState();

    useEffect(() => {
        const mapField = L.map('mapid', {
            center: [40.423, 49.840],
            zoom: 16,
        });
        setMapState(mapField);
    }, []);


    return (
        <MapContext.Provider value={mapState}>
            {children}
        </MapContext.Provider>
    );
}
export default MapProvider;
import React, { useContext } from 'react';
import 'leaflet/dist/leaflet.css';
import MapLayer from './MapLayer';
import MapMarker from './MapMarker';
import { MapContext } from "../MapContext";

const Map = () => {
    let value = useContext(MapContext);
    return (
        <>
            <MapLayer value={value}/>
            <MapMarker value={value}/>
        </>
    )
}
export default Map;
/*As per Dmitriy all related logic regarding popup, modals and etc. should 
be done in this place in MAPLOGIC */
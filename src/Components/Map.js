import React from 'react';
import 'leaflet/dist/leaflet.css';
import MapField from './MapField';
import { layer } from './mapLayer';
import { marker } from './mapMarker';

const Map = () => {
    return (
        <MapField mapID="mapid" initialPosition={[40.423, 49.840]} initialZoom={16} layer={layer} marker={marker} />
    )
}
export default Map;
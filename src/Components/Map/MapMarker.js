import React from 'react';
import L from 'leaflet';
import leafGreen from "leaflet/dist/images/leaf-green.png";
import leafRed from "leaflet/dist/images/leaf-red.png";
import leafOrange from "leaflet/dist/images/leaf-orange.png";
import leafShadow from "leaflet/dist/images/leaf-shadow.png";

const MapMarker = ({ value }) => {
    let severalIcons = L.Icon.extend({
        options: {
            shadowUrl: leafShadow,
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
        }
    });

    let greenIcon = new severalIcons({ iconUrl: leafGreen }),
        redIcon = new severalIcons({ iconUrl: leafRed }),
        orangeIcon = new severalIcons({ iconUrl: leafOrange });

    L.icon = function (options) {
        return new L.Icon(options);
    };

    L.marker([40.4241, 49.8388], { icon: greenIcon }).addTo(value).bindPopup("Sweet Home");
    L.marker([40.4256, 49.8423], { icon: redIcon }).addTo(value).bindPopup("<b>Azadliq Metro</b><br/>The Freedom Subway");
    L.marker([40.4225, 49.8423], { icon: orangeIcon }).addTo(value).bindPopup("Baku Tennis Academy");

    return (
        <>
        </>
    )
}
export default MapMarker;
import L from 'leaflet';
import icons from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

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

const marker = L.marker([40.4240, 49.8386], { icon: myIcon })
    .bindPopup('<b>Hello</b>, <br>hope all is right?');

export { marker };

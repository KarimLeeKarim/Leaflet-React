import './App.css';
import 'leaflet/dist/images/marker-icon.png';
import Map from './Components/Map';
import MapField from './Components/MapField';

function App() {

    return (
        <div className="App">
            <MapField mapID="mapid" />
            <Map/>
        </div>
    );
}

export default App;

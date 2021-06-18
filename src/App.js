import './App.css';
import 'leaflet/dist/images/marker-icon.png';
import MapProvider from './MapContext';
import MapLogic from './Components/Map/MapLogic';
import MapField from './Components/Map/MapField';

function App() {
    return (
        <div className="App">
            <MapField mapID="mapid" />
            <MapProvider>
                <MapLogic />
            </MapProvider>
        </div>
    );
}
export default App;

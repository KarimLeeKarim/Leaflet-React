import './App.css';
import 'leaflet/dist/images/marker-icon.png';
import MapProvider from './MapContext';
import MapLogic from './Components/MapLogic';
import MapField from './Components/MapField';

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

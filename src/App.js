import './App.css';
import Device from './Components/device/Device';
import Tablet from './Components/Tablet/Tablet';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{border: '2px solid lightblue', margin: '20px'}}>
      <Device name="uphone" price="55K"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;

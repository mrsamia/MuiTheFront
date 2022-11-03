import './App.css';
import Buton from './Components/Buton';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Buton variant="outlined" name="View Pages"/>
      <Buton variant="contained" name="Documentation"/>
    </div>
  );
}

export default App;

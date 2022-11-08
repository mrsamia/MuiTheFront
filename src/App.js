import './App.css';
import Nav from './Components/Nav';
import FirstPart from './Pages/FirstPart';

function App() {
  return (
    <div>
      <Nav />
      <div className='pt-5 '>
        <FirstPart />
      </div>
    </div>
  );
}

export default App;

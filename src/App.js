import './App.css';
import Nav from './Components/Nav';
import FirstPart from './Pages/FirstPart';
import SecondPart from './Pages/SecondPart';
import ThirdPart from './Pages/ThirdPart';

function App() {
  return (
    <div>
      <Nav />
      <div className='pt-5 '>
        <FirstPart />
        <SecondPart/>
        <ThirdPart/>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Nav from './Components/Nav';
import FifthPart from './Pages/FifthPart';
import FirstPart from './Pages/FirstPart';
import FourthPart from './Pages/FourthPart';
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
        <FourthPart/>
        <FifthPart/>
      </div>
    </div>
  );
}

export default App;

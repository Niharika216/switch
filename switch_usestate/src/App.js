import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import Increment from './components/Increment';

function App() {
  return (
    <div className="App">
      <Calculator></Calculator>
      <br></br>
      <Increment></Increment>
    </div>
  );
}

export default App;

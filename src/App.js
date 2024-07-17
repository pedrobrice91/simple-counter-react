import logo from './logo.svg';
import SecondsCounter from './components/SecondsCounter'
import './App.css';

function App() {
  return <>
    <div>
      <SecondsCounter />
      ⏱️
      <i className="fa-solid fa-stopwatch"></i>
    </div>
    </>
}

export default App;

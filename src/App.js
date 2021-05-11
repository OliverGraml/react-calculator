import './App.css';
import {Button, addOne} from './Button';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);

  function ColorizeNumber() {
    return <p style={{color: `hsl(${number}, 100%, 50%)`}}> {number}</p>;
  }
  /*  randomHoe forever ❤️ */

  return (
    <div className="App">
      <h1>Random Calculator</h1>
      <h3>Created with React</h3>
      <ColorizeNumber />
      <section>
        <button
          className="button"
          onClick={() => setNumber(Math.floor(-Math.random() * 360 + number))}
        >
          -random
        </button>
        <button className="button" onClick={() => setNumber(number - 10)}>
          -10
        </button>
        <button className="button" onClick={() => setNumber(number - 1)}>
          -1
        </button>
        <button className="button" onClick={() => setNumber(number + 1)}>
          +1
        </button>
        <button className="button" onClick={() => setNumber(number + 10)}>
          +10
        </button>
        <button
          className="button"
          onClick={() => setNumber(Math.floor(Math.random() * 360 + number))}
        >
          +random
        </button>
      </section>
      <button className="button" onClick={() => setNumber(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;

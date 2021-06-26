import pngegg from './pngegg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pngegg} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://es.wikipedia.org/wiki/Suculenta"
          target="_blank"
          rel="noopener noreferrer"
        >
          SUCULENTAS
        </a>
      </header>
    </div>
  );
}

export default App;

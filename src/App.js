import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos al after de Git
        </p>
        <a
          className="App-link"
          href="https://coderhouse.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoderHouse
        </a>
        <p> Lista 1 </p>
        <ul>
          <li> Soy Vane </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

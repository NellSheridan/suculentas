import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const message = () => alert('Esta sección esta en construccion!!')
  return (
    <div className="App">
      <NavBar eventClick={message}/>
    </div>
  );
}

export default App;

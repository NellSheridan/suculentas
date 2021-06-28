import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const message = () => alert('Esta sección esta en construccion!!')
  return (
    <div className="App">
      <NavBar 
        item1="NUESTROS PRODUCTOS" 
        item2="PROMOCIONES" 
        item3="NUESTRA HISTORIA" 
        item4="APRENDE" 
        eventClick={message}/>
    </div>
  );
}

export default App;

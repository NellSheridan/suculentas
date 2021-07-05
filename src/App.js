import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const message = () => alert('Esta sección esta en construccion!!')
  const greetings = {
    title: '!Bienvenido¡',
    subtitle: 'Ponte cómodo :)',
    description: 'En éste espacio encontrarás inspiración relacionada con el mundo de las suculentas, cactus, y sus variantes. ¡Espero que te guste!'
  };
  return (
    <div className="App">
      <NavBar eventClick={message}/>
      <ItemListContainer greeting={greetings}/>
    </div>
  );
}

export default App;

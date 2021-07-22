import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';

import WelcomeContainer from './components/WelcomeContainer/WelcomeContainer';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const message = () => alert('Esta sección esta en construccion!!')
  const greetings = {
    title: '!Directo del Vivero te ofrecemos:¡',
    subtitle: 'Ponte cómodo :)',
    description: 'En éste espacio encontrarás inspiración relacionada con el mundo de las suculentas, cactus, y sus variantes. ¡Espero que te guste!'
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar eventClick={message}/>
        <Switch>
          <Route exact path="/">
            <WelcomeContainer />
          </Route>
          <Route path="/productos">
            <ItemListContainer greeting={greetings}/>
          </Route>
          <Route path="/promociones">
            <ItemDetailContainer />
          </Route>
          <Route path="/historia">
            <ItemDetailContainer />
          </Route>
          <Route path="/bolsa">
            <checkoutCart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

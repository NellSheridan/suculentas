import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import WelcomeContainer from './components/WelcomeContainer/WelcomeContainer';
import CheckoutCart from './views/CheckoutCart/CheckoutCart';
import Promotions from './views/Promotions/Promotions'
import About from './views/About/About'
import Blog from './views/Blog/Blog'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const greetings = {
    title: '!Directo del Vivero te ofrecemos¡',
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <WelcomeContainer />
            <ItemListContainer greeting={greetings}/>
          </Route>
          <Route path="/productos/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/que-hacemos">
            <About />
          </Route>
          <Route path="/promociones">
            <Promotions />
          </Route>
           <Route path="/blog">
             <Blog />
          </Route>
          <Route path="/bolsa">
            <CheckoutCart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

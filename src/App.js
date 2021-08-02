import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Welcome from './views/Welcome/Welcome';
// import CheckoutCart from './views/CheckoutCart/CheckoutCart';
// import Promotions from './views/Promotions/Promotions'
import About from './views/About/About'
import Blog from './views/Blog/Blog'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/productos">
            <ItemListContainer />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/conócenos">
            <About />
          </Route>
           <Route path="/blog">
             <Blog />
          </Route>
          {/* <Route path="/contacto">
            <Contact />
          </Route> */}
          {/* <Route path="/bolsa">
            <Cart />
          </Route> */}
        </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Products/:id" component={Product} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;

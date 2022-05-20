import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact  path="/products/:id" component={Products} />
      </Switch>
    </div>
  );
}

export default App;

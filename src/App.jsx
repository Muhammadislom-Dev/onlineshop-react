import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

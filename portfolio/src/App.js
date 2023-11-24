import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;

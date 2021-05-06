import './App.scss';
import About from './components/About';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;

import './App.scss';
import About from './components/About';
import BottomFooter from './components/BottomFooter';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Feature />
      <Footer />
      <BottomFooter />
    </div>
  );
}

export default App;

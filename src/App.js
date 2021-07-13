import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container ">
        <Header />
        <div className='main'>
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
        </div>  
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
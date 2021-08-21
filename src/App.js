import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import Header from './components/Header/Header';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="grid-container ">
        <Header />
        <div className='main'>
          <Route path="/index.html" render={() => <Main/>} />
          <Route path="/about" render={() => <About about={props.about} />}/>
          <Route path="/works" render={() => <Works data={props.data}/>} />
          <Route path="/contact" render={() => <Contact images={props.images} data={props.contact}/>} />
        </div>  
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
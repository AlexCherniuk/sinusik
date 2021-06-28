import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className="grid-container ">
      <Nav />
      <div className='main'>
        <Main />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
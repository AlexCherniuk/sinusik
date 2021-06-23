import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="grid-container ">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
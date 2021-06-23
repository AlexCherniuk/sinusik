import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="app-wrapper">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
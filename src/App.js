import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
    <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React
        </p>
      </header>
    <Footer/>
    </div>
  );
}

export default App;

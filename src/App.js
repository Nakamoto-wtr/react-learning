import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Grid from './components/Grid/index';
import Person from './components/Learning/index';
import { Stocks } from "./components/Stocks/index";


const App = () =>
    <div className="App">
    <Header/>
    <Grid/>
    <Stocks/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React
        </p>
      </header>
      <Person name ="Waseem" location="Lockdown"/>
    <Footer/>
    </div>




export default App;

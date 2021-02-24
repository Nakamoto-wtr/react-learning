import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Grid from './components/Grid/index';
import Person from './components/Learning/index';
import { Stock } from "./components/Stocks/index";



const App = props => {
  const [ personState, setPersons ] = useState({
    persons: [
      { name: 'Waseem', location: 'Newcastle'},
      { name: 'Will', location: 'LA'}
    ],
    otherState: 'someother value'
  });


const switchNameHandler = () => {
  setPersons({
    persons: [
      {name: 'Max', location: 'Australia'},
      {name: 'Steph', location: 'Manchester'}
    ]
  })
};

  return (
    <div className="App">
    <Header/>
     <Grid/>
     <Stock/>
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>STOCKYO</p>
       </header>
       <button onClick={switchNameHandler}>Switch names</button>
       <Person name ={personState.persons[0].name} location={personState.persons[0].location}/>
       <Person name ={personState.persons[1].name} location={personState.persons[1].location}/>
     <Footer/>
    </div>
  )
}


export default App;

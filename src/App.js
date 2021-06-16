import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Grid from './components/Grid/index';
import Expenses from './components/Learning/Expenses/Expenses';
import List from './components/Learning/List/index';
// import Filter from "./components/Learning/Filter/index";
// import TestImages from "./components/Learning/TestImages/index";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Coffee",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className='App'>
      <Header />
      <Grid />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>STOCKYO</p>
      </header>
      <Expenses items={expenses} />
      <List />
      <Footer />
    </div>
  );
}

export default App;

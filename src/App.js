import React from "react";
// import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Grid from "./components/Grid/index";
import ExpenseItem from "./components/Learning/Clothes/ExpenseItem";
// import Person from "./components/Learning/Names/index";
import List from "./components/Learning/List/index";
// import Filter from "./components/Learning/Filter/index";
// import TestImages from "./components/Learning/TestImages/index";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Coffee',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
 
  return (
    <div className="App">
      <Header />
      <Grid />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date ={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date ={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date ={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date ={expenses[3].date}></ExpenseItem>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>STOCKYO</p>
      </header>
      <List />
      <Footer />
    </div>
  );
};

export default App;

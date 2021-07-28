import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Grid from "./components/GridStocks/index";
import Expenses from "./components/Learning/Expenses/Expenses";
import List from "./components/StocksFilter/index";

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
    <div className="App">
      <Header />
      <Grid />
      <Expenses items={expenses} />
      <List />
      <Footer />
    </div>
  );
};

export default App;

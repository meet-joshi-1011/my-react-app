import React from 'react';
import Expense from "./components/Expenses/Expenses";
import InputExpenses from './components/InputExpenses/InputExpenses';
const App = () => {
  const expense =[
    {
      id: 1,
      title: 'Alien-Ware',
      amount: 999,
      date: new Date(2020,4,19) 
    },
    {
      id: 2,
      title: 'Asus-Rog 9',
      amount: 888,
      date: new Date(2020,5,19) 
    },
    {
      id: 3,
      title: 'Jagwar',
      amount: 999999,
      date: new Date(2020,5,19) 
    },
    {
      id: 4,
      title: 'Lambo',
      amount: 888889,
      date: new Date(2020,5,19) 
    },
  ];
  return (
    <div >
    <InputExpenses />
    <Expense items ={expense}/>
    </div>
  );
}

export default App;

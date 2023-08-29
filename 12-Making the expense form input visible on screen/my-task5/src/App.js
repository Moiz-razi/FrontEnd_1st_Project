import React from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpenses/ExpenseForm';
import NewExpenses from './components/NewExpenses/NewExpenses';
const App = ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"Banglore",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,location:"Hyderabad",},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"Chennai",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"Mumbai",
    },
  ];
  
  const onAddExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  }

  return (
    <div>
      <NewExpenses onAddExpense ={onAddExpenseHandler}/>  
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
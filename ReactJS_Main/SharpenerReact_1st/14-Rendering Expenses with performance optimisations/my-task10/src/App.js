import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import ExpenseForm from './components/NewExpenses/ExpenseForm';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSES = [
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


const App = ()=> {
  
  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
  const AddExpenseHandler = (expense) => {
       setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
       }); 
  };

  return (
    <div>
      <NewExpenses onAddExpense ={AddExpenseHandler}/>  
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
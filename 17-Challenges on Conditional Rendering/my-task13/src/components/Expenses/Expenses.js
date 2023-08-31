import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'; 

function Expenses (props) {
  
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const flteredExpenses = props.items.filter(expense => {
     return expense.date.getFullYear().toString() === filteredYear;
  })
  
  let expensesContent = <p>No expenses found</p>
  
  if(flteredExpenses.length > 0 ){
    expensesContent = flteredExpenses.map((expense) =>{
         
          <ExpenseItem 
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        
      })
  }
  return (
    <Card className="expenses">
      <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
      />
      
      {expensesContent}
    </Card>
  );


}

export default Expenses;
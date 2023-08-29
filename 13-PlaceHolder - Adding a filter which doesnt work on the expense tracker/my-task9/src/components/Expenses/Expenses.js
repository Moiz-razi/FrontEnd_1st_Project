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


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {props.items.map((data) =>{
        return(
          <ExpenseItem 
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
            location={data.location}
          />
        )
      })}
    </Card>
  );


}

export default Expenses;
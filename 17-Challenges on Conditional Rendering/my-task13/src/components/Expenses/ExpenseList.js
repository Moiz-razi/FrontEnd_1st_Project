import React from "react";
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
  console.log(props.filteredExpenses);
  
  if(props.filteredExpenses.length === 0){
    return <p style={{color:'white'}}>Zero expenses</p>
  }
  if (props.filteredExpenses.length === 1) {
    return( <div>
       <ExpenseItem
    key={props.filteredExpenses[0].id}
    title={props.filteredExpenses[0].title}
    amount={props.filteredExpenses[0].amount}
    date={props.filteredExpenses[0].date}
    location={props.filteredExpenses[0].location}
  />

  <p style={{color:'white'}}>Only single Expense here. Please add more...</p>

    </div>) 
  }

  return (
    <div>
      {props.filteredExpenses &&
        props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
    </div>
  );
}

export default ExpenseList;
import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
  
  const [enteredTItle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enterDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
     
        setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
  };
  
  const submitHandler = (event) =>{
      event.preventDefault();

      const expenseData = {
         title : enteredTItle,
         amount : enteredAmount,
         date : new Date(enterDate)
      }
      
      props.onSaveExpenseData(expenseData);

      console.log(expenseData);

      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');

  };
  


  return(
    <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
             <div className="new-expense__control">
                <label>TItle</label>
                <input type="text" value={enteredTItle} onChange={titleChangeHandler} />
             </div>
             <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
             </div>

             <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredAmount} onChange={dateChangeHandler}/>
             </div>
         
           
        
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  );
}

export default ExpenseForm;
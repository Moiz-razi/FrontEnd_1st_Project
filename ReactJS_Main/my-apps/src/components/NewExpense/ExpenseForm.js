import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>{
    
    const [enteredTitle,setEnteredTItle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
           setEnteredTItle(event.target.value);
    };
    const amountChangedHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate),

        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);

        // to clear the input fields after filling submitting form
        setEnteredTItle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                 <lable>Title</lable>
                 <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                 <lable>Amount</lable>
                 <input type="number"  value={enteredAmount} min="0.01" step="0.01"   onChange={amountChangedHandler}/>
            </div>
            <div className="new-expense__control">
                 <lable>Date</lable>
                 <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
              <button type="submit">Add Expense</button>
        </div>
    </form>
    );
    
};

export default ExpenseForm;
import React, {useState} from 'react';
import './ExpenseForm.css';





function ExpenseForm(){

    const [enteredTitle, setEnteredTItle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

      

    const titleChangedHandler = (event) => {
         setEnteredTItle(event.target.value);
     };
     const amountChangedHandler = (event) => {
         setEnteredAmount(event.target.value);
     };
     const dateChangedHandler = (event) => {
         setEnteredDate(event.target.value);
     };
     

    return(

        <form>
            <div className='new-expense__controls'>
                 <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'  onChange={titleChangedHandler}/>
                 </div>
                 <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangedHandler}/>
                 </div>
                 <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangedHandler}/>
                 </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );


}
export default ExpenseForm;
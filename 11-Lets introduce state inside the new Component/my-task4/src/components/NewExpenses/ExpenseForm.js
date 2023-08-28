import React from 'react';
import './ExpenseForm.css';

function ExpenseForm(){
   const titleChangehandler = (event) =>{
      console.log(event.target.value);
  }

  const amountChangehandler = (event) =>{
      console.log(event.target.value);

  }

  const dateChangeHandler = (event) =>{
   console.log(event.target.value);

  }
  
  
   return(
      

      <form onSubmit={SubmitHandler}>
         <div className='new-expense__controls' >
           <div className='new-expense__control'>
            <label>TItle</label>
            <input type='text' onChange={titleChangehandler}/>
           </div>

           <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={amountChangehandler}/>
           </div>

           <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
           </div>
         </div>
      <div className='new-expense__actions'>
         <button type="submit">Add Expense </button>
      </div>
    </form>
     
     
   )
}

export default ExpenseForm;
import './ExpenseItem.css';

function ExpenseItem(){

    const expenseDate = new Date( 2021,3,25);
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294-68;
    const LocationOfExpenditure = "banglore";

     return(
        <div  className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description' >
                <h2>{LocationOfExpenditure}</h2>
                <h2>{expenseTitle}</h2>
               
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
     );
}

export default ExpenseItem;

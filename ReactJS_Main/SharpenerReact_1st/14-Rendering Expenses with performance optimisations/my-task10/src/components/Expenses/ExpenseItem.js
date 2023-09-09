import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const[title, setTitle] = useState(props.title);
  const[price,setPrice]  = useState(props.amount);
  
  const clickPriceHandler = () => {
     setPrice("100")
  }
  const clickHandlerTitle = ()=>{
    setTitle("Sharpener")
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2> 
        <h3>{props.location}</h3>
        <div className='expense-item__price'>${price}</div>
        
        <button onClick={clickPriceHandler}>Change Expenses</button>
        <button onClick={clickHandlerTitle}>Edit Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
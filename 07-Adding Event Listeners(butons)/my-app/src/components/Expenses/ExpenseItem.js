import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  let title = props.title;

  const clickHandlerTitle = ()=>{
        title="ice cream";
        console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2> 
        <h3>{props.location}</h3>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandlerTitle}>Edit Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
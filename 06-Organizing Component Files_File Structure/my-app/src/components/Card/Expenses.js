import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      
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
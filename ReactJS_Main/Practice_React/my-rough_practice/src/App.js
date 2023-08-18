import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
    ]
  return (
       <div>
            <h2>Let's get Started</h2>
           
            <ExpenseItem 
             date = { expenses[0].date} 
             title={expenses[0].title} 
             amount={expenses[0].amount}
            
            ></ExpenseItem>
        </div>
  );
}

export default App;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


function App(){
    // let expenseDate = new Date(2021,3,28);
    // let expenseTitle = "School fee";
    // let expenseAmount = 300;

    let expenses = [
        {
            id:'e1',
            title: "school fee",
            amount: 250,
            date : new Date(2021, 15, 8)
        },
        {
            id:'e2',
            title: "Gym",
            amount: 150,
            date : new Date(2020, 5, 12)
        },
        {
            id:'e3',
            title: "Grocery",
            amount: 950,
            date : new Date(2023, 3, 4)
        },
        {
            id:'e4',
            title: "Books ",
            amount: 340.45,
            date : new Date(2022, 5, 9)
        },
    ]

    return(
      <div>
        <NewExpense/>
        <Expenses item={expenses}/>
      </div> 
    );
}

export default App;
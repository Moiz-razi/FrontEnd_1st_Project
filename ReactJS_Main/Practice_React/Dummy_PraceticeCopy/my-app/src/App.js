 import Expenses from "./components/Expenses/Expenses";
 import NewExpense from "./components/NewExpenses/NewExpense";
 function App(){
     let expenses = [
         {
            id:'e1',
            date : new Date(2023,18,5),
            title : "Tution fee",
            amount : 300
         },
         {
            id:'e2',
            date : new Date(2022,1,8),
            title : "Tution fee",
            amount : 120
         },
         {
            id:'e3',
            date : new Date(2023,8,25),
            title : "Tution fee",
            amount : 500
         },
         {
            id:'e4',
            date : new Date(2022,2,6),
            title : "Tution fee",
            amount : 700.34
         },
     ];
     return(
        <div>
         <NewExpense/>
          <Expenses item={expenses} />

        </div>
         

      );
 }

 export default App;
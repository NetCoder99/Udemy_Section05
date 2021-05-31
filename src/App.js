import React, {useState} from 'react';

import Card           from './components/Card';
import ExpenseData    from './data/ExpenseData';
import ExpenseFilter  from './components/ExpensesFilter/ExpenseFilter';
import ExpensesList   from './components/ExpensesList/Expenses';
import NewExpenseMain from './components/NewExpense/NewExpenseMain';
import ExpensesChart  from './components/ExpensesChart/ExpensesChart';

import './styles/Expenses.css';

const InitialExpenses = [...ExpenseData];

function App() {

  //------------------------------------------------------------------
  const [expenses, setExpenses] = useState(InitialExpenses);

  const onAddExpenseDataHandler = (enteredExpenseData) => {
    console.log('+ onAddExpenseDataHandler');
    setExpenses((prevExpenses) => {
      const tempExpenseData = {id: 'e' + (prevExpenses.length+1), ...enteredExpenseData }
      return [...prevExpenses, tempExpenseData];
    });
  }

  const onDelExpenseDataHandler = (expenseId) => {
    console.log('+ onDelExpenseDataHandler:'+expenseId);

    setExpenses((prevExpenses) => {
      var array = [...prevExpenses];
      var index = array.findIndex(p => p.id == expenseId);
      console.log('+ index:'+index);
      if (index !== -1) {
        array.splice(index, 1);
        return [...array];
      }      
      return [...prevExpenses];
    });
  }

  //------------------------------------------------------------------
  const[filterYear, setFilterYear] = useState('');
  const onFilterChangedHandler = (filterYear) => {
    console.log('+ onFilterChangedHandler');
    setFilterYear(filterYear);
    console.log(filterYear);
  }

  //------------------------------------------------------------------
  return (
    <Card  className="expenses">
      <h2 style={{color: "lightblue"}}>Expense Tracker</h2>
      <NewExpenseMain onAddExpenseData={onAddExpenseDataHandler}/>
      <ExpenseFilter  onFilterChanged={onFilterChangedHandler}></ExpenseFilter>
      <ExpensesChart  expenseData={expenses} filterYear={filterYear}></ExpensesChart>
      <ExpensesList   onDelExpenseData={onDelExpenseDataHandler} expenseData={expenses} filterYear={filterYear}  />
    </Card>
  );
}

export default App;

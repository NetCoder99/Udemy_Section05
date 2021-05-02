import React, {useState} from 'react';

import Card from './components/Card';
import ExpenseData from './data/ExpenseData';
import ExpensesList from './components/ExpensesList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/ExpensesFilter/ExpenseFilter';

import './styles/Expenses.css';

const DummyExpenses = [...ExpenseData];

function App() {

  //------------------------------------------------------------------
  const [expenses, setExpenses] = useState(DummyExpenses);
  const onAddExpenseDataHandler = (enteredExpenseData) => {
    console.log('+ onAddExpenseDataHandler');
    setExpenses((prevExpenses) => {
      const tempExpenseData = {id: 'e' + (prevExpenses.length+1), ...enteredExpenseData }
      return [...prevExpenses, tempExpenseData];
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
      <NewExpense     onAddExpenseData={onAddExpenseDataHandler}/>
      <ExpenseFilter  onFilterChanged={onFilterChangedHandler}></ExpenseFilter>
      <ExpensesList   expenseData={expenses} filterYear={filterYear}  />
    </Card>
  );
}

export default App;

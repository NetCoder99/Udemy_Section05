import React, {useState} from 'react';

import ExpenseData from './data/ExpenseData';
import Card from './components/Card';
import ExpensesList from './components/ExpensesList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/ExpensesFilter/ExpenseFilter';

import './styles/Expenses.css';

function App() {

  const onAddExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {...enteredExpenseData, id2: Math.random().toString()};
    console.log(newExpenseData);
  }

  const[filterYear, setFilterYear] = useState('');
  const onFilterChangedHandler = (filterYear) => {
    setFilterYear(filterYear);
    console.log(filterYear);
  }

  return (
    <Card  className="expenses">
      <h2 style={{color: "lightblue"}}>Expense Tracker</h2>
      <NewExpense onAddExpenseData={onAddExpenseDataHandler}/>
      <ExpenseFilter onFilterChanged={onFilterChangedHandler}></ExpenseFilter>
      <ExpensesList data={ExpenseData} filterYear={filterYear}  />
    </Card>
  );
}

export default App;

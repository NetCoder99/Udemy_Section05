import ExpenseData from './data/ExpenseData';
import Card from './components/Card';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import './styles/Expenses.css';

function App() {
  return (
    <Card  className="expenses">
      <h2 style={{color: "lightblue"}}>Expense Tracker</h2>
      <NewExpense />
      <Expenses data={ExpenseData} />
    </Card>
  );
}

export default App;

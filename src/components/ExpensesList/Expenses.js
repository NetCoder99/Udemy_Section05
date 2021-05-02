import ExpensesList from './ExpensesList';

function Expenses(props) {
    let filteredExpenses = [];

    if (props.filterYear)
    {filteredExpenses = props.expenseData.filter(expense => expense.date.getFullYear().toString() === props.filterYear);}
    else 
    {filteredExpenses = props.expenseData.map(d=>d);}

    return (
    <ExpensesList 
      items={filteredExpenses} 
      filterYear={props.filterYear}>
    </ExpensesList>);
}
export default Expenses;


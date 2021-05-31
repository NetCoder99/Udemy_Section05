import ExpensesList from './ExpensesList';

function Expenses(props) {
    let filteredExpenses = [];

    const delExpenseItem = (expenseId) => {
      setTimeout(
        () => props.onDelExpenseData(expenseId), 
        100
      ); 

      //props.onDelExpenseData(expenseId);
      console.log("delExpenseItem:" + expenseId);
    }

    if (props.filterYear)
    {filteredExpenses = props.expenseData.filter(expense => expense.date.getFullYear().toString() === props.filterYear);}
    else 
    {filteredExpenses = props.expenseData.map(d=>d);}

    return (
    <ExpensesList 
      items={filteredExpenses} 
      filterYear={props.filterYear}
      onDelExpenseDataItem={delExpenseItem}
      >
    </ExpensesList>);
}
export default Expenses;


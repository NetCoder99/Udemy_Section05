import ExpenseListItem from './ExpenseListItem';
function Expenses(props) {
    let filteredExpenses = [];
    if (props.filterYear)
    {filteredExpenses = props.expenseData.filter(expense => expense.date.getFullYear().toString() === props.filterYear);}
    else 
    {filteredExpenses = props.expenseData.map(d=>d);}
    return (
        filteredExpenses.map(d => (
            <ExpenseListItem 
                key={d.id}
                title={d.title}
                amount={d.amount} 
                date={d.date} 
            />
            ) 
        )
    );
}
export default Expenses;


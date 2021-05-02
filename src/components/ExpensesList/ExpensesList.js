import ExpenseListItem from './ExpenseListItem';
import '../../styles/ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2>No expenses found for year: {props.filterYear} </h2>
    }
    return (
        <ul className="expenses-list"> 
            {props.items.map((d) => (
                    <ExpenseListItem 
                        key={d.id}
                        title={d.title}
                        amount={d.amount} 
                        date={d.date}/>
                ))}
        </ul>
    )
}

export default ExpensesList

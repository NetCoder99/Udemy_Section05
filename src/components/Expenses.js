import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    console.log('props:' + props);
    console.log('props[0].title:' + props.data[0].title);
    return (
        props.data.map(d => (
            <ExpenseItem 
                title={d.title}
                amount={d.amount} 
                date={d.date} 
            />
          ) 
        )
    );
}

export default Expenses;


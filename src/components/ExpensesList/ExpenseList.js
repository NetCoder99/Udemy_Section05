import ExpenseListItem from './ExpenseListItem';

function Expenses(props) {
    console.log('props:' + props);
    console.log('props[0].title:' + props.data[0].title);
    console.log('props.filterYear:' + props.filterYear);

    const tempExpenses1 = props.data.map(d => d);
    console.log(tempExpenses1);
    const tempExpenses2 = tempExpenses1.filter( expRec => expRec.date.getFullYear().toString() === props.filterYear.toString() );
    console.log(tempExpenses2);

    if (!props.filterYear) {
        console.log('no filter, display all');
        return (
            tempExpenses1.map(d => (
                <ExpenseListItem 
                    title={d.title}
                    amount={d.amount} 
                    date={d.date} 
                />
              ) 
            )
        );
    }
    else 
    {
        console.log('filter the list');
        return (
            tempExpenses2.map(d => (
                <ExpenseListItem 
                    title={d.title}
                    amount={d.amount} 
                    date={d.date} 
                />
              ) 
            )
        );
    
    }

}

export default Expenses;


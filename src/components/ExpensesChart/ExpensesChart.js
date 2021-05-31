import Chart from './Chart';

const ExpensesChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    let filteredExpenses = [];
    if (props.filterYear)
    {filteredExpenses = props.expenseData.filter(expense => expense.date.getFullYear().toString() === props.filterYear);}
    else 
    {filteredExpenses = props.expenseData.map(d=>d);}

    for(const expense of props.expenseData) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return ( 
        <Chart dataPoints={chartDataPoints}></Chart>
    )
};

export default ExpensesChart;

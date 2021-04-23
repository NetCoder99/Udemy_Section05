import React, {useState} from 'react';

import '../../styles/NewExpense.css';

const ExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {setEnteredTitle(event.target.value);};
    const amountChangeHandler = (event) => {setEnteredAmount(event.target.value);}
    const dateChangeHandler = (event) => {setEnteredDate(event.target.value);}

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //setEnteredTitle('');
        //setEnteredAmount('');
        //setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="1.01" step="0.01" onChange={amountChangeHandler}  />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2018-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;

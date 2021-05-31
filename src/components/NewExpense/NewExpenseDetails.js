import React, {useState} from 'react';

import '../../styles/NewExpense.css';

const NewExpenseDetails = (props) => {
    const[saveMessage,   setSavedMessage] = useState('');

    const[enteredTitle,  setEnteredTitle]  = useState('A Book');
    const[enteredAmount, setEnteredAmount] = useState('9.99');
    const[enteredDate,   setEnteredDate]   = useState('2020-06-01');

    const titleChangeHandler  = (event) => {setEnteredTitle(event.target.value);};
    const amountChangeHandler = (event) => {setEnteredAmount(event.target.value);}
    const dateChangeHandler   = (event) => {setEnteredDate(event.target.value);}

    const submitHandler = (event) => {
        console.log('++ submitHandler');
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate.replace(/-/g, '/'))
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setSavedMessage('New Expense was saved!');

        setTimeout(
            () => setSavedMessage(''), 
            2000
          );        
        //setEnteredTitle('');
        //setEnteredAmount('');
        //setEnteredDate('');
    }

    const hideDetailsPanel = (event) => {
        console.log('++ hideDetailsPanel');
        event.preventDefault();
        props.onHideDetailsPanel();
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
                <span>{saveMessage}</span>
                <button onClick={hideDetailsPanel}>Cancel</button>
                <button>Save Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseDetails;

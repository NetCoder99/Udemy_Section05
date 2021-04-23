import React from 'react';

import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.css';

function NewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {...enteredExpenseData, id1: Math.random().toString()};
        props.onAddExpenseData(expenseData);
        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
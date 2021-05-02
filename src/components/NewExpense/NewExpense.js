import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../../styles/NewExpense.css';

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpenseData(enteredExpenseData);
        console.log(enteredExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import '../../styles/NewExpense.css';

function NewExpense(props) {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
}

export default NewExpense;
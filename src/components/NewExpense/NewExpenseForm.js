import React from 'react';

import '../../styles/NewExpense.css';

const NewExpenseForm = (props) => {
    const displayHandler = (event) => {
        console.log('++ displayHandler');
        event.preventDefault();
        props.onDisplayForm();
    }

    return (
        <form onSubmit={displayHandler}>
            <div className="new-expense__actions">
                <button>Add New Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;

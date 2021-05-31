import React, {useState} from 'react';
import NewExpenseDetails from './NewExpenseDetails';
import '../../styles/NewExpense.css';

function NewExpenseMain(props) {
    const [isFormVisible, setFormVisible] = useState(false);

    const displayForm = () => {
        console.log("+ displaying form");
        setFormVisible(true);
    }

    const hideForm = () => {
        console.log("+ hiding form");
        setFormVisible(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpenseData(enteredExpenseData);
        console.log(enteredExpenseData);
    }

    return (
        <div className="new-expense">
            {!isFormVisible && <button onClick={displayForm} >Add New Expense</button>}
            {isFormVisible && 
            <NewExpenseDetails 
                onSaveExpenseData={saveExpenseDataHandler}
                onHideDetailsPanel={hideForm} /> }
        </div>
    );
}

export default NewExpenseMain;
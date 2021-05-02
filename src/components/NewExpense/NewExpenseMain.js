import React, {useState} from 'react';
import NewExpenseForm    from './NewExpenseForm';
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

    if (isFormVisible) {
        return (
            <div className="new-expense">
                <NewExpenseDetails 
                    onSaveExpenseData={saveExpenseDataHandler}
                    onHideDetailsPanel={hideForm} />
            </div>
        );
    }
    return (
        <div className="new-expense">
            <NewExpenseForm  onDisplayForm={displayForm}/>
        </div>

    );
}

export default NewExpenseMain;
import React, {useState} from 'react';

import Card from '../Card';
import '../../styles/ExpenseItem.css';
import ExpenseDate from './ExpenseListDate';

function ExpenseItem(props) {
    const [origTitle] = useState(props.title.toString());
    const [crntTitle, setCrntTitle] = useState(props.title);

    const btnClickHandler = () => {
        console.log('button click:' + crntTitle);
        if (crntTitle === 'button click') 
        {setCrntTitle(origTitle);}
        else 
        {setCrntTitle('button click');}
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{crntTitle}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={btnClickHandler}>Edit</button>
        </Card>
    );
}

export default ExpenseItem;
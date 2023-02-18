import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);

    const setBudget = (new_budget) => {
        const UPPER_LIMIT = 20000;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(parseInt(new_budget) > UPPER_LIMIT) {
            alert("The budget cannot exceed "+ currency + UPPER_LIMIT);
            return;
        }
        if(budget < totalExpenses) {
            alert("The budget cannot be lower than the total spending " + currency + totalExpenses);
            new_budget = totalExpenses;
        }

        if(new_budget === ""){
            new_budget = 0;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(new_budget),
        });
    };

    return (
        <div className="alert alert-secondary">
            <span ><label for="budget" style={{float: "left"}}>Budget: {currency}</label><input
                required='required'
                type='number'
                id='budget'
                step='10'
                value={budget}
                style={{ width: "100%"}}
                onChange={(event) => setBudget(event.target.value)} /></span>
        </div>
    );
}

export default Budget;
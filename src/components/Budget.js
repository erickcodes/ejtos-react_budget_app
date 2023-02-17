import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency } = useContext(AppContext);

    const setBudget = (new_budget) => {
        const UPPER_LIMIT = 20000;
        if(new_budget > UPPER_LIMIT) {
            alert("The budget cannot exceed "+ currency + UPPER_LIMIT);
            return;
        }

        if(new_budget === ""){
            new_budget = 0
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(new_budget),
        });
    };

    return (
        <div className="alert alert-secondary">
            <label for="budget">Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ display: 'flex' , size: 5}}
                onChange={(event) => setBudget(event.target.value)} />
            
        </div>
    );
}

export default Budget;
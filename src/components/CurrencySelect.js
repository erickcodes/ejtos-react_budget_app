import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencySelect = () => {
    const { dispatch, currency } = useContext(AppContext);
    
    const changeCurrency = (currencySymbol) => {
        if(currencySymbol.length != 1){
            return;
        }
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencySymbol,
        });
    };

    const currencyName = (currencySymbol) => {
        switch(currencySymbol){
            case "$":
                return 'Dollar';
            case "£":
                return 'Pound';
            case "€":
                return 'Euro';
            case "₹":
                return 'Ruppee';
            default:
                return 
        }
    };

    return (
            <select className="custom-select alert alert-success" id="currencySelector" onChange={(event) => changeCurrency(event.target.value)}>
                <option defaultValue>Currency ({currency} {currencyName(currency)})</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
    );
};

export default CurrencySelect;
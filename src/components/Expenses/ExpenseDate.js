import React from 'react';
import './ExpenseDate.css'
const ExpenseDate = (props) =>{
    const month =props.date.toLocaleString("en-us",{month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-us",{day: "2-digit"});
        return( <div class = "expense-date">
            <div class = "expense-date__month">{month}</div>
            <div class = "expense-date__year">{year}</div>
            <div class = "expense-date__day">{day}</div>
        </div>);
}
export default ExpenseDate;
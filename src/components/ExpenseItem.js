import './ExpenseItem.css';
function ExpenseItem(propOnj){
    const month =propOnj.date.toLocaleString("en-us",{month: "long"});
    const year = propOnj.date.getFullYear();
    const day = propOnj.date.toLocaleString("en-us",{day: "2-digit"});
    return (<div className='expense-item'>
    <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
    </div>
        <div className='expense-item__description'>
            <h2>{propOnj.title}</h2>
            <div className='expense-item__price'>${propOnj.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;
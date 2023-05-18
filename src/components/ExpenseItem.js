import './ExpenseItem.css';
function ExpenseItem(propOnj){
    return (<div className='expense-item'>
        <div>{propOnj.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{propOnj.title}</h2>
            <div className='expense-item__price'>${propOnj.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;
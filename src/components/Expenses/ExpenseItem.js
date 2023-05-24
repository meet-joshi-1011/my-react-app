import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const  ExpenseItem = (propObj) => {
    const [title , setTitle] = useState(propObj.title);
    // here title is key or instanse of propOnj.title 
    // setTitle is a function used to set title of expense item
    const ChangeTitle = () =>{
        console.log("Clicked Me :)");
    }
    return (<Card className='expense-item'>
        <ExpenseDate date ={propObj.date}/>
        <div className='expense-item__description'>
            <h2>{propObj.title}</h2>
            <div className='expense-item__price'>${propObj.amount}</div>
            <button onClick={ChangeTitle}>Change Title</button>
        </div>
    </Card>
    );
}
export default ExpenseItem;
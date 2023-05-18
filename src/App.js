import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense =[
    {
      id: 1,
      title: 'Alien Ware',
      amount: 999,
      date: new Date(2020,5,18) 
    },
    {
      id: 2,
      title: 'Asus Rog 9',
      amount: 888,
      date: new Date(2020,5,18) 
    },
    {
      id: 3,
      title: 'Jagwar',
      amount: 999999,
      date: new Date(2020,5,18) 
    },
    {
      id: 4,
      title: 'Lambergini',
      amount: 888889,
      date: new Date(2020,5,18) 
    },
  ];
  return (
    <div >
    <h1>MJ_Project</h1>
    <ExpenseItem
    title={expense[0].title}
    amount={expense[0].amount}
    date={expense[0].date}></ExpenseItem>
    <ExpenseItem
     title={expense[1].title}
    amount={expense[1].amount}
    date={expense[1].date}></ExpenseItem>
    <ExpenseItem
     title={expense[2].title}
    amount={expense[2].amount}
    date={expense[2].date}></ExpenseItem>
    <ExpenseItem
     title={expense[3].title}
    amount={expense[3].amount}
    date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

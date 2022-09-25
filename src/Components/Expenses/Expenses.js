import React,{useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpenseChart';
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear}
      onChangeFilter={filterChangeHandler}
      />
       <ExpensesChart expenses={filteredExpenses} />
    <ExpenseList items={filteredExpenses} />
      
    </Card>
  );
}

export default Expenses;
'use client';
import Headings from '../week-2/headings';
import ExpenseList from './expenseList';
import ExpenseTracker from './expenseTracker';
import { useState } from 'react';
import Blogs from './blogs/page';

export default function Page() {
  const onAddExpense = (expense) => {
    const newExpense = {
      id: Math.floor(Math.random() * 1000),
      name: Item.itemName,
      quantity: Item.quantity,
      category: Item.category,
    };
    setItems([...expenses, newExpense]);
  };
  const [expenses, setExpenses] = useState([]);
  return (
    <div>
      <Headings />
      <Blogs />

      <div>
        <ExpenseTracker onAddExpense={onAddExpense} />
      </div>
      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  );
}

'use client';
import { useState } from 'react';
import Items from '../week-8/items';

export default function ExpenseTracker({
  expenses,
  setExpenses,
  onAddExpense,
}) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 1000);
    const newItem = {
      id: newId,
      expenseName,
      expenseDescription,
      expenseAmount,
    };

    // alert the user of the item they added
    alert(
      'Expense Name: ' +
        expenseName +
        ' Expense Description: ' +
        expenseDescription +
        ' Expense Amount: ' +
        expenseAmount
    );
    onAddItem(newItem);
    //clears the form after submission
    setQuantity(0);
    setItemName('');
    setCategory('Produce');
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className='flex flex-auto flex-col border-2  basis-20 content-center justify-center'>
        <div className='flex flex-row'>
          <h2 className='my-5'>Expense Name</h2>
          <input
            className=' m-5 w-44 border-2 border-black'
            id='expenseName'
            value={expenseName}
            type='text'
          />
        </div>
        <div className='flex flex-row'>
          <h2 className='my-5'>Expense description</h2>
          <input
            className=' m-5 w-44 h-40 border-2 border-black'
            id='expenseDescription'
            value={expenseDescription}
            type='text'
          />
        </div>
        <div className='flex flex-row'>
          <h2 className='my-5'>Expense amount </h2>
          <input
            className=' m-5 w-44 border-2 border-black'
            id='expenseAmount'
            value={expenseAmount}
            type='text'
          />
        </div>

        <button
          className='bg-blue-500 text-white rounded-md p-2 m-2'
          onClick={() => {
            onAddExpense({ expenseName, expenseDescription, expenseAmount });
          }}>
          Add expense
        </button>
      </div>
    </div>
  );
}

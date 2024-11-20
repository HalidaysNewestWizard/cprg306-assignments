'use client';

import Items from './Items.js';
import { useState } from 'react';

// in javascript the sort() method is used to sort the elements of an array in place and returns the sorted array you just have to pass a function that gives the order
// (a,b)=> a-b for ascending order and b-a for descending order
// the map() method creates a new array populated with the results of calling a provided function on every element in the calling array

export default function ItemList({ items, setItems, onItemSelect }) {
  // sort the items array by name
  // shallow copy of the itemsJson array

  //  to sort array using state we need to use the useState hook on the array to track the change of the list
  //  and then use the setItems method to update the list

  // State for the sorting of the items array by name
  const [sortByName, setSortName] = useState(true);
  // State for the sorting of the items array by category
  const [sortByCategory, setSortCategory] = useState(false);

  // function to sort the items array by name
  const SortByName = () => {
    if (!sortByName) {
      setSortName(true);
      setSortCategory(false);
      const sortedItems = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setItems(sortedItems);
    }
  };

  // function to sort the items array by category
  const SortByCategory = () => {
    if (!sortByCategory) {
      setSortName(false);
      setSortCategory(true);
      const sortedItems = [...items].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      setItems(sortedItems);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen p-5 bg-gray-200'>
      <h1 className='text-xl'>Shopping List</h1>
      <div>
        <button
          type='button'
          className='text-l  border-2 rounded-md bg-orange-500 hover:bg-red-500  w-40'
          onClick={SortByName}>
          Name
        </button>
        <button
          type='button'
          className='m-5 text-l border-2 rounded-md bg-orange-500  hover:bg-red-500 w-40'
          onClick={SortByCategory}>
          Category
        </button>
      </div>

      <div className=' flex flex-wrap'>
        {items &&
          items.map((item, index) => (
            <Items
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
      </div>
    </div>
  );
}

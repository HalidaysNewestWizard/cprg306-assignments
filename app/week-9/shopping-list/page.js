'use client';
import { useState } from 'react';
import ItemList from './item-list';
import Headings from '../week-2/headings';

import Return from '../return';

import NewItem from './new-item';
import itemsJson from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
  // counter component needs  to pass the counter state to the Main component
  //  so that the counter state can be passed to the Item List component
  //  to update the list of items

  //  the quantity state is passed to the quantity component

  //  the items state is passed to the ItemList component
  const [items, setItems] = useState(itemsJson);

  const [selectedItem, setSelectedItem] = useState('');

  //  the sortByName state is passed to the ItemList component

  //  the sortByCategory state is passed to the ItemList component

  // the itemName state is passed to the NewItem component

  // the category state is passed to the NewItem component
  const AddItem = (Item) => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      name: Item.itemName,
      quantity: Item.quantity,
      category: Item.category,
    };
    setItems([...items, newItem]);
  };
  const stripUnwanted = (str) => {
    const wanted = str.replace(/[^a-zA-Z0-9 -]/g, '').split(' ')[0];
    return wanted;
  };
  const handleItemSelect = (item) => {
    const itemName = stripUnwanted(item.name);
    console.log('item selected:', itemName);

    setSelectedItem(itemName);
  };

  return (
    <main>
      <Headings />

      <div className=' flex flex-row '>
        <MealIdeas ingredient={selectedItem} />
        <div className=' flex flex-col  border-4 border-dashed h-auto'>
          <NewItem onAddItem={AddItem} />
          <ItemList
            items={items}
            setItems={setItems}
            onItemSelect={handleItemSelect}
          />
        </div>
      </div>
      <Return />
    </main>
  );
}

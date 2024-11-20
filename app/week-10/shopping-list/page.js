'use client';
import { useState, useEffect } from 'react';
import ItemList from './item-list';
import Headings from '@/app/week-2/headings';
import Return from '@/app/return';

//import Shopping-List-service from './shopping-list-service';
import * as ShoppingListService from '../_services/shopping-list-service';
import NewItem from './new-item';

import MealIdeas from './meal-ideas';

export default function Page() {
  useEffect(() => {
    const fetchItems = async () => {
      const items = await ShoppingListService.getItems(user.uid);
      setItems(items);
    };
    fetchItems();
  }, []);

  //  the items state is passed to the ItemList component
  const [items, setItems] = useState([]);

  const [selectedItem, setSelectedItem] = useState('');

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
      <Headings title='Shopping List' />
      <div className=' flex flex-row '>
        <MealIdeas ingredient={selectedItem} />
        <div className=' flex flex-col  border-4 border-dashed h-auto'>
          <NewItem onAddItem={AddItem} />
          <ItemList
            items={items}
            setItems={setItems}
            onItemSelect={handleItemSelect}
          />
          <Return />
        </div>
      </div>
    </main>
  );
}

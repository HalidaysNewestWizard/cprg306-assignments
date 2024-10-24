"use client";
import { useState } from "react";
import ItemList from "./item-list";
import Headings from "../week-2/headings";

import Return from "../return";

import NewItem from "./new-item";
import itemsJson from "./items.json";

export default function Page() {
  // counter component needs  to pass the counter state to the Main component
  //  so that the counter state can be passed to the Item List component
  //  to update the list of items

  //  the quantity state is passed to the quantity component

  //  the items state is passed to the ItemList component
  const [items, setItems] = useState(itemsJson);

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

  return (
    <main>
      <Headings />
      <div className=" flex flex-row ">
        <ItemList items={items} setItems={setItems} />
        <NewItem onAddItem={AddItem} />
      </div>
      <Return />
    </main>
  );
}

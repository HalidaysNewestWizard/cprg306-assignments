"use client ";
import { useState } from "react";

export default function NewItem() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let item = { itemName, category, quantity };
    alert(
      "Item Name: " +
        itemName +
        " Category: " +
        category +
        " Quantity: " +
        quantity
    );
    console.log(item);
  };
  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z]/g, "");
    setItemName(name);
  };
  const handleCategoryChange = (event) => {
    let category = event.target.value;
    setCategory(category);
  };

  return (
    <div className="flex my-10   justify-center w-screen">
      <div className=" flex h-48 w-140 rounded-md p-4 bg-blue-300/25  justify-around">
        {/* <h1 className="text-4xl">Item</h1> */}
        {/* {quantity > 10 && <p className="text-3xl text-red-600">Quantity is greater than 10</p>} */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex text-xl w-96 gap-4 my-2 justify-around">
            <label>Item Name :</label>
            <input
              id="itemName"
              className="w-40 h-10 rounded-md border-2 border-blue-500"
              type="text"
              value={itemName}
              onChange={(e) => handleNameChange(e)}
            />
          </div>

          <div className="flex text-xl  w-96 gap-4 my-2 justify-around">
            <label className="text-xl ">Category</label>
            <select
              className="w-40 h-10 rounded-md border-2 border-blue-500"
              value={category}
              onChange={(e) => handleCategoryChange(e)}
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen">Frozen</option>
            </select>
          </div>
          <div className="flex text-xl  w-96  border-2 justify-around">
            <div className="flex text-xl  w-48 gap-4 my-2 justify-around">
              <button
                type="button"
                className="w-12 h-10 mx-1  rounded-3xl  bg-blue-500  border-2  border-white-400  text-2xl"
                onClick={decrement}
              >
                -
              </button>
              <button
                type="button"
                className="w-12 h-10 mx-2 rounded-3xl   bg-blue-500  border-2 border-white-400  text-xl"
                onClick={increment}
              >
                +
              </button>
              <p className="my-2">{quantity}</p>
            </div>
            <button
              type="submit"
              className="w-20 h-10 my-2 bg-blue-500 rounded-md text-white"
              onChange={(e) => handleSubmit(e.target.value)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

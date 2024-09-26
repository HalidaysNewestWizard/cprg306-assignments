import Items from './Items.js';

export default function ItemList() {
    return (
        <div>
            <h1 className='text-xl'>Shopping List</h1>
            <div className=''>
            <Items name="milk, 4 L 🥛" quantity="1" category="Dairy" />
            <Items name="bread 🍞" quantity="2" category="Bakery" />
            <Items name="bananas 🍌" quantity="6" category="Produce" />
            <Items name="eggs, dozen 🥚" quantity="2" category="Dairy" />
            <Items name="broccoli 🥦" quantity="3" category="Produce" />
            <Items name="chicken breasts, 1 kg 🍗" quantity="1" category="Meat" />
            <Items name="Pasta sauce 🍝" quantity="3" category="Canned Goods" />
            <Items name="spaghetti, 454 g 🍝" quantity="2" category="Dry Goods" />
            <Items name="toilet paper, 12 pack 🧻" quantity="1" category="Household" />
            <Items name="paper towels, 6 pack" quantity="1" category="Household" />
            <Items name="dish soap 🍽️" quantity="1" category="Household" />
            <Items name="hand soap 🧼" quantity="4" category="Household" />
             </div>   
        </div>
    );
}
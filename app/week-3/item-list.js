import Items from './Items.js';

export default function ItemList() {
    return (
        <div>
            <h1 className='text-xl'>Shopping List</h1>
            <div className=''>
            <Items name="Apple" quantity="5" category="Fruit" />
            <Items name="Banana" quantity="6" category="Fruit" />
            <Items name="Orange" quantity="7" category="Fruit" />
            <Items name="Milk" quantity="2" category="Dairy" />
            <Items name="Eggs" quantity="12" category="Dairy" />
            <Items name="Cheese" quantity="1" category="Dairy" />
            <Items name="Bread" quantity="1" category="Bakery" />
            <Items name="Cake" quantity="1" category="Bakery" />
            <Items name="Croissant" quantity="2" category="Bakery" />
             </div>   
        </div>
    );
}
"use client";
import {useState} from 'react';
import Counter from './counter';
import NewItem from './new-item';
import Return from '../return';



const Page = () => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

  
    return (
      
           <main>
          
           <div  className='flex flex-col '>
            <NewItem/>
         
            <Return/> 
           </div>
          </main>
    );
};

export default Page;
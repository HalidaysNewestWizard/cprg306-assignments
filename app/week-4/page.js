"use client";
import React from 'react';
import Counter from './counter';
import NewItem from './new-item';
import Return from '../return';


const Page = () => {
    return (
      
           
          
           <div  className="flex-col justify-center ">
            <NewItem/>
          
            <Return/> 
           </div>
          
    );
};

export default Page;
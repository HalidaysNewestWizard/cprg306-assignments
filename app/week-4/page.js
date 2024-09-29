"use client";
import React from 'react';
import Counter from './counter';
import NewItem from './new-item';
import Return from '../return';


const Page = () => {
    return (
        <div className=' flex justify-center flex-col'>
           
          
           <div className=' flex w-80 border-double border-4 rounded-lg text-pretty bg-blue-700 m-4  justify-center '>
            <NewItem/>
           </div>
           <Return/>
        </div>
    );
};

export default Page;
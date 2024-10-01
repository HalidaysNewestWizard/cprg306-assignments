import React from 'react';
import Link from 'next/link';



export default function Return() {

    return (
        <div className='flex justify-center w-screen'>
        <div className=" w-72  text-center font-extrabold  p-5 m-10 text-black bg-slate-600 rounded-lg border-4 border-white">
            <h2 className='font-serif'>RETURN TO MAIN PAGE</h2>
            <Link className='text-blue-800' href="/">Main Page</Link>
           
        </div>
        </div>
    );
}
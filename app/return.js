import React from 'react';
import Link from 'next/link';



export default function Return() {

    return (
        <div className=" text-center font-extrabold  w-auto text-2xl text-green-600 m-5 text-pretty border-double border-8 border-emerald-900  bg-cyan-300 rounded-3xl">
            <h2 className='font-serif'>RETURN TO MAIN PAGE</h2>
            <Link href="/">Main Page</Link>
           
        </div>
    );
}
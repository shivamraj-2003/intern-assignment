import React from 'react';
import p1 from "../images/p1.png";

export default function Header() {
    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center mt-6'>
            <div className='flex items-center space-x-4 sm:space-x-8 md:space-x-16'>
                <img className='h-8 w-8' src={ p1 } alt='PayPal Logo' />
                <h1 className='font-semibold'>Personal</h1>
                <h1 className='font-semibold'>Business</h1>
                <h1 className='font-semibold'>Developer</h1>
                <h1 className='font-semibold'>Help</h1>
            </div>

            <div className='flex justify-between items-center space-x-4 mt-4 sm:mt-0'>
                <button className='font-semibold border-2 h-10 sm:h-12 w-18 sm:w-24 px-7 sm:px-10 text-blue-700 rounded-3xl border-blue-500'>Log In</button>
                <button className='font-semibold border text-white h-10 sm:h-12 w-18 sm:w-24 px-7 sm:px-10 rounded-3xl bg-blue-500 border-blue-500'>Sign Up</button>
            </div>
        </div>
    );
}
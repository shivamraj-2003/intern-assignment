import React from 'react';

export default function Footer() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-24 mx-4 sm:mx-24 border-t-2 mt-4'>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
                <h1 className='font-bold text-blue-800'>About</h1>
                <h1 className='font-bold text-blue-800'>Newsroom</h1>
                <h1 className='font-bold text-blue-800'>Jobs</h1>
                <h1 className='font-bold text-blue-800'>Investor Relations</h1>
                <h1 className='font-bold text-blue-800'>Values in Action</h1>
                <h1 className='font-bold text-blue-800'>Public Policy</h1>
                <h1 className='font-bold text-blue-800'>Sitemap</h1>
            </div>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0'>
                <h1 className='font-semibold text-gray-400'><i className="fa-solid fa-copyright"></i>1999-2024</h1>
                <h1 className='font-bold text-blue-800'>Accessibility</h1>
                <h1 className='font-bold text-blue-800'>Privacy</h1>
                <h1 className='font-bold text-blue-800'>Cookies</h1>
                <h1 className='font-bold text-blue-800'>Legal</h1>
            </div>
        </div>
    );
}

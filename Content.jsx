import React from 'react';
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";

export default function Content() {
    return (
        <div>
            <div className='mt-8 border-t-2'>
                <h1 className='mt-4 text-center text-blue-600 sm:mx-40'>Help Center</h1>
            </div>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='container'>
                    <h1 className='my-8 text-3xl font-semibold text-center'>How can we help?</h1>
                    <form className="mt-4 border rounded-3xl max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by keyword" required />
                        </div>
                    </form>
                </div>
                <div className='border p-4 sm:w-full rounded-lg mt-8 bg-yellow-200 flex flex-col sm:flex-row items-center sm:space-x-4'>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p className='font-normal text-center sm:text-left'>Received a suspicious email, fake invoice, or message? Don't reply, open links, download attachments, or call any listed phone numbers. We'll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <span className='font-semibold text-blue-900'>phishing@paypal.com</span> and then delete them.</p>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='mt-6 flex flex-col sm:flex-row justify-between sm:space-x-0 sm:box'>
                    <div className='mx-auto sm:mx-6 p-2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-1/3 px-12 border rounded-lg'>
                        <img className='h-12 border rounded-3xl mt-2 mx-auto sm:mx-2 w-18' src={ p4 } />
                        <div>
                            <h1 className='font-bold text-center sm:text-left'>Resolution Center</h1>
                            <h2 className='font-normal text-center sm:text-left'>Resolve transaction or account issues</h2>
                        </div>
                    </div>
                    <div className='mx-auto sm:mx-6 p-2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 border rounded-lg w-full sm:w-1/3'>
                        <img className='h-12 border rounded-3xl mt-2 mx-auto sm:mx-2 w-18' src={ p3 } />
                        <div>
                            <h1 className='font-bold text-center sm:text-left'>Ask the Community</h1>
                            <h2 className='font-normal text-center sm:text-left'>Find answers or join the conversation</h2>
                        </div>
                    </div>
                    <div className='mx-auto sm:mx-6 p-2 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 border rounded-lg w-full sm:w-1/3'>
                        <img className='h-12 border rounded-3xl mt-2 mx-auto sm:mx-2 w-18' src={ p2 } />
                        <div>
                            <h1 className='font-bold text-center sm:text-left'>Message center</h1>
                            <h2 className='font-normal text-center sm:text-left'>Send, receive, and view your PayPal messages</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

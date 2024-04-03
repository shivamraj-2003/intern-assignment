import React from 'react';

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-lg">
            <div className='mt-2 flex flex-col items-center md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 border p-2 bg-slate-300 rounded-3xl w-full'>
                <h1 className='bg-white border px-2 border-white rounded-full text-blue-800 font-bold p-2'>Personal Help</h1>
                <h1 className='font-semibold'>Business Help</h1>
                <h1 className='font-semibold'>Technical Help</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto space-y-8 md:space-y-0 md:space-x-20'>
                <div className='space-y-4'>
                    <h1 className='font-bold text-xl border rounded-lg w-full md:w-56 p-2 bg-blue-100 text-blue-800'>Common Questions</h1>
                    <h1 className='font-semibold text-lg'>PayPal Help Guides</h1>
                    <h1 className='font-semibold text-lg'>Payments & Transfers</h1>
                    <h1 className='font-semibold text-lg'>Disputes & Limitations</h1>
                    <h1 className='font-semibold text-lg'>My Account</h1>
                    <h1 className='font-semibold text-lg'>My Wallet</h1>
                    <h1 className='font-semibold text-lg'>Login & Security</h1>
                    <h1 className='font-semibold text-lg'>Seller Tools</h1>
                </div>
                <div className='space-y-4 mt-8 md:mt-32'>
                    <h1 className='font-semibold text-2xl'>Common Questions</h1>
                    <h1 className='text-blue-800 font-bold'>How do I open a case with a seller?</h1>
                    <h1 className='text-blue-800 font-bold'>I forgot my password. How do I reset it?</h1>
                    <h1 className='text-blue-800 font-bold'>Why is my payment on hold or unavailable?</h1>
                    <h1 className='text-blue-800 font-bold'>I want my money back. Can I cancel a payment?</h1>
                    <h1 className='text-blue-800 font-bold'>Why am I receiving emails from PayPal when I don't have an account?</h1>
                    <h1 className='text-blue-800 font-bold'>How do I report an unauthorized transaction or account activity</h1>
                    <h1 className='text-blue-800 font-bold'>Why is the payment I sent pending? Can I cancel it?</h1>
                    <h1 className='text-blue-800 font-bold'>How do I request a refund?</h1>
                    <h1 className='text-blue-800 font-bold'>Why was my payment declined?</h1>
                    <h1 className='text-blue-800 font-bold'>How do I change the name on my PayPal account?</h1>
                </div>
                <div class='border bg-slate-100 rounded-lg md:flex items-center justify-center h-56 w-full md:w-72 mt-8 md:mt-0'>
                    <h1 class='mt-4 md:mt-0 mx-4 md:mx-0 font-semibold text-center md:text-left'>Get customized help with your account and access your message center</h1>
                    <button class='font-semibold mt-4 md:mt-0 mx-auto md:mx-4 md:ml-0 border-2 border-blue-800 rounded-3xl h-10 w-20 text-blue-800'>Log In</button>
                </div>

            </div>
        </div>
    );
}
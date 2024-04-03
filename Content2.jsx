import React from 'react';
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p8 from "../images/p8.png";
import p9 from "../images/p9.svg";

export default function Content2() {
    return (
        <div className='box mt-20 mx-auto max-w-screen-lg'>
            <h1 className='text-center text-2xl font-thin'>More ways to get help</h1>
            <div className='container flex flex-col md:flex-row mt-8'>
                <div className='mt-2 space-y-2 mx-auto md:ml-0 md:mr-8'>
                    <img className='mx-auto md:mx-12' src={ p7 } />
                    <h1 className='mx-2 md:mx-0 font-semibold text-blue-700 text-center md:text-left'>Community Forum</h1>
                    <p className='text-center md:text-left'>Find answers or join the conversation</p>
                </div>
                <div className='mt-2 space-y-2 mx-auto md:mx-40'>
                    <img className='mx-auto md:mx-14' src={ p6 } />
                    <h1 className='mx-8 md:mx-0 font-semibold text-blue-700 text-center md:text-left'>Resolution Center</h1>
                    <p className='text-center md:text-left'>Resolve transaction or account issues</p>
                </div>
                <div className='mt-2 space-y-2 mx-auto md:mr-0 md:ml-8'>
                    <img className='mx-auto md:mx-12' src={ p5 } />
                    <h1 className='mx-8 md:mx-0 font-semibold text-blue-700 text-center md:text-left'>Contact us</h1>
                    <p className='text-center md:text-left'>Contact Customer Service</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mx-auto mt-16 p-4 border-lg bg-slate-200 space-y-4 md:space-y-0 md:space-x-40'>
                <div className='mx-auto md:mx-12 mt-6'>
                    <h1 className='text-xl font-normal text-center md:text-left'>How are we doing?</h1>
                    <p className='mt-2 text-center md:text-left'>Help improve the <span className='font-bold'>PayPal Help Center experience</span> with some quick feedback.</p>
                </div>
                <button className='mt-8 mx-auto md:mt-6 md:mx-0 border h-12 w-40 rounded-3xl text-white bg-blue-800'>Take the survey</button>
            </div>
            <img className='mx-0 mt-16' src={ p8 } />
            <div className='mt-6 flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-80 mx-auto'>
                <div className='flex flex-wrap justify-center md:justify-start space-x-2'>
                    <h1 className='font-bold text-blue-800'>Help</h1>
                    <h1 className='font-bold text-blue-800'>Contact</h1>
                    <h1 className='font-bold text-blue-800'>Fees</h1>
                    <h1 className='font-bold text-blue-800'>Security</h1>
                    <h1 className='font-bold text-blue-800'>Apps</h1>
                    <h1 className='font-bold text-blue-800'>Shop</h1>
                    <h1 className='font-bold text-blue-800'>Enterprise</h1>
                    <h1 className='font-bold text-blue-800'>Partners</h1>
                </div>
                <div className='flex justify-center space-x-40'>
                    <img className='h-10 w-10' src={ p9 } />
                </div>
            </div>
        </div>
    );
}
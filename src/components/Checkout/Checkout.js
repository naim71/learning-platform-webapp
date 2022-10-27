import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses = useLoaderData();
    console.log(courses);

    const handleAlert = (event) => {
        alert('Subscription Done!');
    }

    return (
        <div>
            <div className='bg-[#2C0874] md:w-1/4 mx-auto my-16 shadow-xl text-white rounded-xl p-16'>
                <p className='text-2xl font-bold mb-3'>Checkout</p>
                <div className='flex justify-between mb-1'>
                    <h1>Course ID:</h1>
                    <h1 className='font-semibold text-pink-600'> {courses.id}</h1>
                </div>
                <div className='flex justify-between mb-1'>
                    <h1>Course Title:</h1>
                    <h1 className='font-semibold text-pink-600 text-right'> {courses.title}</h1>
                </div>
                <div className='flex justify-between mb-1'>
                    <h1>Fee:</h1>
                    <h1 className='font-semibold text-pink-600'> ${courses.price}</h1>
                </div>
                <button onClick={handleAlert} className='bg-pink-600 hover:bg-pink-800 px-4 py-2 rounded-md shadow-xl mt-8 flex justify-center items-center mx-20'>Subscribe</button>
            </div>
        </div>


    );
};

export default Checkout;
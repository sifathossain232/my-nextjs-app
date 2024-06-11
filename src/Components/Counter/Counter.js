"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2 className='mt-10'>Counter: {counter}</h2>
            <div className='flex gap-5 mt-5'>
                <button className="py-2 px-5 bg-purple-500 text-white  rounded-lg" onClick={() => setCounter(counter + 1)}>Incarease</button>
                <button className="py-2 px-5 bg-sky-500 text-white rounded-lg" onClick={() => setCounter(counter - 1)}>Decarease</button>
            </div>
        </div>
    );
};

export default Counter;
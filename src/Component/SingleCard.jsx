import React from 'react';
import callpic from '../assets/call.png'
const SingleCard = () => {
    return (
        <div className='border-1 text-center space-y-2 shadow-2xl p-6 '>
            <div>
                <img className='bg-red-500 rounded-full p-5 mx-auto' src={callpic} alt="pic" />
            </div>
            <h1 className='font-semibold text-[20px]'>David Kim</h1>
            <p className='text-[#64748B] text-[12px] ' >62d ago</p>
            <button className='text-[12px] text-[#244D3F] font-medium bg-green-300 rounded-2xl py-1 px-2' >work</button>
            <br />
            <button className='text-white bg-amber-300 rounded-2xl py-1 px-2'>Almost Due</button>
        </div>
    );
};

export default SingleCard;
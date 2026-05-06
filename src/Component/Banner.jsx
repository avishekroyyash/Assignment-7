import { Plus } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
   <div>
    {/* banner head */}
     <div className='max-w-[1110px] mx-auto mt-10 text-center'>
         <h1 className='font-bold text-5xl mb-4'>Friends to keep close in your life</h1>
         <p className='text-[#64748B] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
        relationships that matter most.</p>
        <button className='bg-[#244D3F] text-white px-5 mx-auto py-2 rounded-md flex justify-center items-center gap-1 '> <Plus></Plus> Add a Friend</button>
    </div>
    {/* Banner Card */}
    
    <div>
        <div className='grid grid-cols-4 max-w-[1110px] mx-auto mt-10 mb-10 gap-4'>
            <div className=' shadow-2xl text-center p-8 '>
                <h1 className='text-[#244D3F] font-semibold text-4xl '>10</h1>
                <h4 className='text-[#64748B] text-[18px] '>Total Friends</h4>
            </div>
            <div  className='shadow-2xl text-center p-8'>
                <h1  className='text-[#244D3F] font-semibold text-4xl '>3</h1>
                <h4 className='text-[#64748B] text-[18px] ' >On Track</h4>
            </div>
            <div  className='shadow-2xl text-center p-8'>
                <h1  className='text-[#244D3F] font-semibold text-4xl '>6</h1>
                <h4 className='text-[#64748B] text-[18px] '>Need Attention</h4>
            </div>
            <div  className='shadow-2xl text-center p-8'>
                <h1  className='text-[#244D3F] font-semibold text-4xl '>12</h1>
                <h4 className='text-[#64748B] text-[18px] '>Interactions This Month</h4>
            </div>
        </div>
    </div>
    {/* Break line */}
    
    <div className='max-w-[1110px] mx-auto text-[#E9E9E9] mb-10 '>
        <hr />
    </div>
    <h1 className='text-[24px] text-[#1F2937] font-semibold max-w-[1110px] mx-auto '>Your Friends</h1>






   </div>
    );
};

export default Banner;
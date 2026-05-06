import { House } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
           <div className=' flex justify-center items-center flex-col space-y-3 py-60'>
             <h1 className='text-9xl font-bold text-[#244D3F]'>404</h1>
            <p className='text-2xl font-bold'>Page not found</p>
            <p className='px-3 font-medium'>Looks the friendship link is broken .The page which<br /> you are looking for doesn't exixt or has been moved </p>
            <button onClick={()=> navigate('/')} className='flex justify-center items-center gap-2 bg-[#244D3F] text-white p-3 rounded-md btn hover:bg-green-800'>
            <House></House> Back to Home
            </button>
           </div>
        </div>
    );
};

export default Error;
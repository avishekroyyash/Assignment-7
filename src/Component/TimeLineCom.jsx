import React from 'react';
import call from '../assets/call.png';
import text from '../assets/text.png';
import video from '../assets/video.png';
const TimeLineCom = () => {
    return (
        <div>

            <div className='flex gap-4 shadow-md border-2 border-gray-200 rounded-2xl p-8'>
                 <img src={call} alt="" />
                <div>
                 <h1 className='font-medium text-[20px] text-[#244D3F]'>Call <span className='text-[#64748B] text-[18px]'>with Sarah Chen</span> </h1>
                 <p className='text-[#64748B] text-[16px]'>March 28, 2026</p>
                </div>
            </div>

              <div className='flex gap-4 shadow-md border-2 border-gray-200 rounded-2xl p-8'>
                 <img src={video} alt="" />
                <div>
                 <h1 className='font-medium text-[20px] text-[#244D3F]'>video <span className='text-[#64748B] text-[18px]'>with Sarah Chen</span> </h1>
                 <p className='text-[#64748B] text-[16px]'>March 28, 2026</p>
                </div>
            </div>
            
            <div className='flex gap-4 shadow-md border-2 border-gray-200 rounded-2xl p-8'>
                 <img src={text} alt="" />
                <div>
                 <h1 className='font-medium text-[20px] text-[#244D3F]'>Text <span className='text-[#64748B] text-[18px]'>with Sarah Chen</span> </h1>
                 <p className='text-[#64748B] text-[16px]'>March 28, 2026</p>
                </div>
            </div>

        </div>
    );
};

export default TimeLineCom;
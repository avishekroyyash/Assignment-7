import React from 'react';
import call from '../assets/call.png';
import text from '../assets/text.png';
import video from '../assets/video.png';
const TimeLineCom = ({item}) => {
    // console.log(item)
    return (
        <div>

            <div className='flex gap-4 shadow-md border-2 border-gray-200 rounded-2xl p-8'>
                 {/* <img src={call} alt="" /> */}
                      {
                    item.click == 'Call' ? (<img src={call} alt="" />) :
                    item.click == 'Text' ? (<img src={text} alt="" />) :
                     (<img src={video} alt="" />)
                 }

                <div>
                 <h1 className='font-medium text-[20px] text-[#244D3F]'>{item.click} <span className='text-[#64748B] text-[18px]'>with {item.name}</span> </h1>
                 <p className='text-[#64748B] text-[16px]'>{item.time}</p>
                </div>
            </div>


        </div>
    );
};

export default TimeLineCom;
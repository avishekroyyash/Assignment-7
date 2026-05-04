import React from 'react';
import callpic from '../assets/call.png'
import { Archive, BellMinus, Trash } from 'lucide-react';
import call from '../assets/call.png';
import text from '../assets/text.png';
import video from '../assets/video.png';


const FullCard = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-9 gap-3 mt-5 max-w-[1110px] mx-auto '>

            <div className=' shadow-xl border-2 border-gray-200 rounded-2xl row-span-6'>
                  <div className='bg-white rounded-2xl  text-center space-y-2  p-6 '>
                             <div>
                                 <img className='bg-red-500 rounded-full p-5 mx-auto' src={callpic} alt="pic" />
                             </div>
                             <h1 className='font-semibold text-[20px]'>David Kim</h1>
                             <p className='text-[#64748B] text-[12px] ' >62d ago</p>
                             <button className='text-[12px] text-[#244D3F] font-medium bg-green-300 rounded-2xl py-1 px-2' >work</button>
                             <br />
                             <button className='text-white bg-amber-300 rounded-2xl py-1 px-2'>Almost Due</button>
                             <p>"Former colleague, great mentor"</p>
                             <p>Preferred: email</p>
                         </div>
       
            </div>

            <div className='shadow-md border-2 border-gray-200  flex justify-center items-center flex-col rounded-2xl row-span-3 '>
             <h1 className='text-[30px] font-semibold text-[#244D3F]'>62</h1> 
             <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
            </div>

            <div className='shadow-md border-2 border-gray-200 flex justify-center items-center flex-col rounded-2xl row-span-3'>
              <h1 className='text-[30px] font-semibold text-[#244D3F]'>30</h1> 
             <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
            </div>

            <div className='shadow-md border-2 border-gray-200 flex justify-center items-center flex-col rounded-2xl row-span-3'>
                 <h1 className='text-[30px] font-semibold text-[#244D3F]'>Feb 27, 2026</h1> 
             <p className='text-[18px] text-[#64748B]'>Next Due</p>
            </div>

            <div className=' col-span-3 row-span-3 shadow-md border-2 border-gray-200 rounded-2xl'>
                <div className='flex justify-between px-10 pt-15'>
                    <h1 className='text-[20px] text-[#244D3F]' >Relationship Goal</h1>
                    <button className='btn'>Edit</button>
                </div>
             <p className='pl-10 text-[#64748B] text-[18px]'>Connect every <span className='font-bold text-black'>30 days</span> </p>
            </div>

            <div className=' shadow-md border-2 border-gray-200 rounded-2xl row-span-1  font-medium'>
             <h1 className='flex justify-center items-center py-3 gap-1'> <BellMinus></BellMinus>Snooze 2 weeks</h1>
            </div>

            <div className='shadow-md border-2 border-gray-200 rounded-2xl col-span-3 row-span-3'>
                <h1 className='text-[20px] text-[#244D3F]font-medium pt-5 pl-5'>Quick Check-In</h1>
                <div className='grid grid-cols-3 gap-5 mt-4 px-5'>

                <div className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3 '>
                    <img src={call} alt="call" />
                    <p>Call</p>
                </div>
                <div className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3'>
                    <img src={text} alt="text" />
                    <p>Text</p>
                </div>
                <div className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3'>
                    <img src={video} alt="video" />
                    <p>Video</p>
                </div>
               </div>
            </div>

                 <div className=' shadow-md border-2 border-gray-200 rounded-2xl row-span-1  font-medium'>
                    <h1 className='flex justify-center items-center py-3 gap-1'> <Archive></Archive>Archive</h1>
                 </div>

                      <div className=' shadow-md border-2 border-gray-200 rounded-2xl row-span-1 text-red-500 font-medium'>
                        <h1 className='flex justify-center items-center py-3 gap-1'> <Trash></Trash> Delete</h1>
                  </div>
           
        </div>
    );
};

export default FullCard;
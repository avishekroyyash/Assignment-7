import React, { useContext, useState } from 'react';
import { SocialContex } from '../../Contex/ContextProvider';
import { ArrowDown, Heading1 } from 'lucide-react';
import call from '../../assets/call.png';
import text from '../../assets/text.png';
import video from '../../assets/video.png';

const TimeLine = () => {
    // take data using context api
    const value = useContext(SocialContex)
    const socialTypeData = value.social
    // add filter approach
    const [filter,setfilter]=useState('All');
     const FilterData = filter == 'All' ? socialTypeData :
                                       socialTypeData.filter(item =>item.click == filter)
  
   

    return (
        <div>

       <div className="dropdown dropdown-start flex justify-start items-center         max-w-277.5 mx-auto">
  <div tabIndex={0} role="button" className="btn m-1 flex justify-between gap-40  btn my-20 px-10">Filter timeline <ArrowDown></ArrowDown> </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm">
    <li className='btn' onClick={()=>setfilter('All')}>All</li>
       <li className='btn' onClick={()=>setfilter('Call')}>call</li>
       <li className='btn' onClick={()=>setfilter('Text')}>text</li>
        <li className='btn' onClick={()=>setfilter('Video')}>video</li>
  </ul>
</div>

           {
            FilterData.map((item,index)=> {
                return (
                     <div key={index}>
                    
                                <div className='flex gap-4 shadow-md border-2 border-gray-200 rounded-2xl p-8 max-w-277.5 mx-auto'>
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
                )
            }) 
           }
        </div>
    );
};

export default TimeLine;
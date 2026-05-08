import React from 'react';
import { Link } from 'react-router';
const SingleCard = ({item}) => {
    //  console.log(item,'itemasddddddddddddd')
    const {id,name,picture,tags,status} = item ;
    return (
        <Link to={`/${id}`} className='text-center space-y-2 shadow-xl p-6'>
            <div>
                <img className='rounded-full p-6 mx-auto' src={picture} alt="pic" />
            </div>
            <h1 className='font-semibold text-[20px]'> {name} </h1>
            <p className='text-[#64748B] text-[12px] ' >62d ago</p>
            {/* <button className='text-[12px] text-[#244D3F] font-medium bg-green-300 rounded-2xl py-1 px-2' >work</button> */}
           <div className='flex gap-3 justify-center items-center'>
             {
                tags.map((item,index)=>{
                    return(
                      <button key={index} className='text-[12px] text-[#244D3F] font-medium bg-green-300 rounded-2xl py-1 px-2' >{item}</button>   
                    )
                })
            }
           </div>
            <br />
             {
                 status === "almost due" ? (
                   <button className="text-white bg-amber-300 rounded-2xl py-1 px-2">
                    Almost Due
                  </button>
            ) : status === "on-track" ? (
                  <button className="text-white bg-green-900 rounded-2xl py-1 px-2">
                   On Track
                  </button>
            ) : (
                 <button className="text-white bg-red-500 rounded-2xl py-1 px-2">
                 Overdue
                </button>
            )
             }
          
        </Link>
    );
};

export default SingleCard;
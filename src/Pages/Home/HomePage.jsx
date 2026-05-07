import React, { useEffect, useState } from 'react';
import Banner from '../../Component/Banner';
import SingleCard from '../../Component/SingleCard';


// const FriendPromise = fetch('../../../public/friend.json').then(res => res.json());

const HomePage = () => {
     const [loading,setLoading] = useState(true);
     const [FriendData , setFriendData] = useState([])
    // const FriendData = use(FriendPromise)
     useEffect(()=>{
        const fetchData = async()=>{
         const res = await fetch('/friend.json');
         const data = await res.json();
         setFriendData(data);
         setLoading(false)
        }
        fetchData();
     },[])
  
    // console.log(FriendData)
    return (
        <div>
           <Banner></Banner>
           
            {
                loading ? (<span className="loading loading-dots loading-xl p-15 ml-10"></span>) :
                (  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-277.5 mx-auto'> 
                {
                    FriendData.map((item,index )=> <SingleCard key={index} item={item}></SingleCard>  )
                }
            </div> )
            }

        </div>
    );
};

export default HomePage;
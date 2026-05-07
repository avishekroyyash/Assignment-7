
import callpic from '../assets/call.png'
import { Archive, BellMinus, Trash } from 'lucide-react';
import call from '../assets/call.png';
import text from '../assets/text.png';
import video from '../assets/video.png';
import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { SocialContex } from '../Contex/ContextProvider';
import { toast } from 'react-toastify';


const FullCard = () => {
     
     // id will be come from react router .
        const {id} = useParams();
        // console.log(id,'id asr kota ')
         
             const [loading,setLoading] = useState(true);
             const [FriendData , setFriendData] = useState([])
      
             useEffect(()=>{
                const fetchData = async()=>{
                 const res = await fetch('/friend.json');
                 const data = await res.json();
                 setFriendData(data);
                 setLoading(false)
                }
                fetchData();
             },[])
            // console.log(FriendData,FriendData )
    
        const ExistData = FriendData.find(item => item.id == id)
        // console.log(ExistData,'Exist data ')

        if(loading){
            return(
            <span className="loading loading-dots loading-xl p-15 ml-10"></span>
            );
        }

       const{name,picture,tags,status,email,days_since_contact,bio,goal,next_due_date} = ExistData

       //use context api to take the data of social like(call,text,video)
        const {social,setSocial} = useContext(SocialContex);
        //  console.log(social,'social media call ,text,video')
    
       // handle onclike
       const handleSocial = (type,userDetails)=>{
        const newData = {
           ...userDetails,
           click:type,
           time: new Date().toLocaleDateString()
        }
        setSocial([...social,newData]);
        // console.log(type,'handle social')
        if(newData.click=='Text'){
            toast.success('clicked on the text')
        }
        else if( newData.click == 'Call'){
            toast.success('clicked on the call')
        }
        else {
            toast.success('clicked on the video')
        }
       } 
       
    return (
        <div className='grid lg:grid-cols-4 lg:grid-rows-9 gap-3 mt-5 lg:max-w-277.5 mx-auto '>

            <div className=' shadow-xl border-2 border-gray-200 rounded-2xl lg:row-span-6 row-span-2'>
                  <div className='bg-white rounded-2xl  text-center space-y-2  p-6 '>
                             <div>
                                 <img className='rounded-full p-5 mx-auto' src={picture} alt="pic" />
                             </div>
                             <h1 className='font-semibold text-[20px]'>{name}</h1>
                             <p className='text-[#64748B] text-[12px] ' >62d ago</p>
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
                             <p>{bio}</p>
                             <p>{email}</p>
                         </div>
       
            </div>

            <div className='shadow-md border-2 border-gray-200  flex justify-center items-center flex-col rounded-2xl lg:row-span-3 '>
             <h1 className='text-[30px] font-semibold text-[#244D3F]'>{days_since_contact}</h1> 
             <p className='text-[18px] text-[#64748B]'>Days Since Contact</p>
            </div>

            <div className='shadow-md border-2 border-gray-200 flex justify-center items-center flex-col rounded-2xl lg:row-span-3 '>
              <h1 className='text-[30px] font-semibold text-[#244D3F]'>{goal}</h1> 
             <p className='text-[18px] text-[#64748B]'>Goal (Days)</p>
            </div>

            <div className='shadow-md border-2 border-gray-200 flex justify-center items-center flex-col rounded-2xl lg:row-span-3 '>
                    <h1 className='text-[30px] font-semibold text-[#244D3F]'>{next_due_date}</h1> 
             <p className='text-[18px] text-[#64748B]'>Next Due</p>
            </div>

            <div className=' col-span-3 row-span-3 shadow-md border-2 border-gray-200 rounded-2xl'>
                <div className='flex justify-between px-10 lg:pt-15 pt-2'>
                    <h1 className='text-[20px] text-[#244D3F]' >Relationship Goal</h1>
                    <button className='btn'>Edit</button>
                </div>
             <p className='pl-10 text-[#64748B] text-[18px]'>Connect every <span className='font-bold text-black'>{days_since_contact} days</span> </p>
            </div>

            <div className=' shadow-md border-2 border-gray-200 rounded-2xl row-span-1  font-medium'>
             <h1 className='flex justify-center items-center py-3 gap-1'> <BellMinus></BellMinus>Snooze 2 weeks</h1>
            </div>

 {/* this is the functional section  */}

            <div className='shadow-md border-2 border-gray-200 rounded-2xl col-span-3 row-span-3'>
                <h1 className='text-[20px] text-[#244D3F]font-medium pt-5 pl-5'>Quick Check-In</h1>
                <div className='grid grid-cols-3 gap-5 mt-4 px-5'>

                <div onClick={()=>handleSocial('Call',ExistData)} className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3 hover:bg-gray-300 '>
                    <img src={call} alt="call" />
                    <p>Call</p>
                </div>
                <div onClick={()=>handleSocial('Text',ExistData)} className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3 hover:bg-gray-300 '>
                    <img src={text} alt="text" />
                    <p>Text</p>
                </div>
                <div onClick={()=>handleSocial('Video',ExistData)} className='flex justify-center items-center bg-[#E9E9E9] rounded-xl flex-col space-y-2 p-3 hover:bg-gray-300 '>
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
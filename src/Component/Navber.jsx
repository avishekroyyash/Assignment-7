import { ChartNoAxesCombined, Clock, House, Menu } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';
import navlogo from '../assets/logo.png'
const Navber = () => {
    return (
        <div className=' flex justify-between md:gap-50 lg:gap-150 gap-20 items-center max-w-400 mx-auto md:border-b lg:border-b md:px-20 lg:px-20 px-5 py-3 bg-[#FFFFFF] '>
        <img src={navlogo} alt="navlogo" />
        <div className='md:flex lg:flex gap-5 hidden'>
        <NavLink to='/' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><House></House>Home</NavLink>
        <NavLink to='/timeline' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><Clock></Clock>Timeline</NavLink>
        <NavLink to='/stats' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}> <ChartNoAxesCombined></ChartNoAxesCombined> Stats</NavLink>
       
        </div> 

         {/* this is for responsive */}
        {/* <div className='drapdown'>
            <button className='btn'> <Menu></Menu> </button>
              <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Timeline</a>
        </li>
        <li><a>Stats</a></li>
      </ul>
        </div> */}
        <div className="dropdown">
      <div tabIndex={0} role="button" className="  ml-5 md:hidden lg:hidden">
       <button className='btn mr-5'> <Menu></Menu> </button>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden md:hidden">
  <NavLink to='/' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><House></House>Home</NavLink>
        <NavLink to='/timeline' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><Clock></Clock>Timeline</NavLink>
        <NavLink to='/stats' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}> <ChartNoAxesCombined></ChartNoAxesCombined> Stats</NavLink>
      </ul>
    </div>

        </div>
    );
};

export default Navber;
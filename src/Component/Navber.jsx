import { ChartNoAxesCombined, Clock, House } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';
import navlogo from '../assets/logo.png'
const Navber = () => {
    return (
        <div className='flex justify-between items-center max-w-400 mx-auto border-b px-20 py-3 bg-[#FFFFFF]'>
        <img src={navlogo} alt="navlogo" />
        <div className='flex gap-10'>
        <NavLink to='/' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><House></House>Home</NavLink>
        <NavLink to='/timeline' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}><Clock></Clock>Timeline</NavLink>
        <NavLink to='/stats' className={(obj)=> ` flex gap-2 font-semibold p-2 ${obj.isActive && 'bg-green-900  text-white rounded-md '}`}> <ChartNoAxesCombined></ChartNoAxesCombined> Stats</NavLink>
        </div>   
        </div>
    );
};

export default Navber;
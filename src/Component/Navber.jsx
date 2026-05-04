import { ChartNoAxesCombined, Clock, House } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';
import navlogo from '../assets/logo.png'
const Navber = () => {
    return (
        <div className='flex justify-between items-center max-w-400 mx-auto border-b px-20 py-3 bg-[#FFFFFF]'>
        <img src={navlogo} alt="navlogo" />
        <div className='flex gap-10'>
        <button className='flex gap-2 font-semibold'><House></House>Home</button>
        <button className='flex gap-2 font-semibold'><Clock></Clock>Timeline</button>
        <button className='flex gap-2 font-semibold'> <ChartNoAxesCombined></ChartNoAxesCombined> Stats</button>
        </div>   
        </div>
    );
};

export default Navber;
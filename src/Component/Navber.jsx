import { ChartNoAxesCombined, Clock, House, Menu } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';
import navlogo from '../assets/logo.png';

const Navber = () => {
    return (
        <div className='flex justify-between items-center max-w-400 mx-auto md:border-b px-5 md:px-20 py-3 bg-white'>

           
            <img src={navlogo} alt="navlogo" />

            {/* Desktop Menu */}
            <div className='hidden md:flex gap-5'>
                <NavLink to='/' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <House /> Home
                </NavLink>

                <NavLink to='/timeline' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <Clock /> Timeline
                </NavLink>

                <NavLink to='/stats' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <ChartNoAxesCombined /> Stats
                </NavLink>
            </div>

            {/* Mobile Dropdown */}
            <div className="dropdown md:hidden">
                <div tabIndex={0} role="button" className="btn">
                    <Menu />
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content right-0 mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-1"
                >
                      <NavLink to='/' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <House /> Home
                </NavLink>

                <NavLink to='/timeline' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <Clock /> Timeline
                </NavLink>

                <NavLink to='/stats' className={({ isActive }) =>
                    `flex gap-2 font-semibold p-2 ${isActive ? 'bg-green-900 text-white rounded-md' : ''}`
                }>
                    <ChartNoAxesCombined /> Stats
                </NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Navber;
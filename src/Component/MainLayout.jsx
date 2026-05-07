import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router';
import Footer from './Footer';
import TestNav from './TestNav';

const MainLayout = () => {
    return (
        <div>
            {/* <TestNav></TestNav> */}
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
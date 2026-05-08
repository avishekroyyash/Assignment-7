import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomePage from './Pages/Home/HomePage';
import TimeLine from './Pages/TimeLine/TimeLine';
import Stats from './Pages/Stats/Stats';
import Error from './Component/Error';
import MainLayout from './Component/MainLayout';
import FullCard from './Component/FullCard';

export const router = createBrowserRouter([
{
    path:'/',
    Component:MainLayout,
    children:[
        {
            index:true , Component:HomePage
        },
        {
            path:'timeline', Component:TimeLine
        },
        {
            path:'stats', Component:Stats
        },
        {
          path:'/:id',
           Component:FullCard,
            errorElement:<Error />
        }
        //  {
        //     path:'/:id', Component:FullCard 
        // },
        // {
        //      path:'*', Component:Error 
        //  }
    ]
}

])
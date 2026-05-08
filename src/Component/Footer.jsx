
import React from 'react';
import fb from '../assets/facebook.png';
import inst from '../assets/instagram.png';
import twi from '../assets/twitter.png'
import logxl from '../assets/logo-xl.png'
const Footer = () => {
    return (
        <div>
             <footer className='bg-[#244D3F] max-w-400 h-125 lg:h-103.25 py-10 mx-auto mt-10'>
        <div className='max-w-277.5 h-52.25 mx-auto text-center  '>
             <img className='mb-4 mx-auto h-10 md:h-15 lg:h-17.5' src={logxl} alt="logo" />
           <p className='text-[#fafafa99] mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
           <p className='text-white font-medium'>Social Links</p>
           <div className='flex gap-2 items-center justify-center mt-4'>
            <img src={inst} alt="instagram" />
            <img src={fb} alt="facebook" />
            <img src={twi} alt="twiter" />
           </div>
           <div className='mt-10 text-[#fafafa99] '>
            <hr />
           </div>
           <div className=' mt-8 lg:flex items-center justify-between text-[#fafafa99] '>
            <h3 >© 2026 KeenKeeper. All rights reserved.</h3>
            <div className='lg:flex gap-4 '>
              <h3>Privacy Policy</h3>
              <h3>Terms of Service</h3>
              <h3>Cookies</h3>
            </div>
           </div>
        </div>

      </footer> 
        </div>
    );
};

export default Footer;
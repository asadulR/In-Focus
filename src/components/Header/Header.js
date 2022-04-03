import React, { useState } from 'react';
import { MenuIcon, XIcon, CameraIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-indigo-100'>
            <div className='md:flex justify-between items-center'>
                <div className='flex justify-between items-center py-5 px-8 container mx-auto'>
                    <div>
                        <Link to='home' className='text-2xl font-semibold text-gray-600'>In Focus <CameraIcon className='inline w-8'></CameraIcon></Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden ml-3'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </div>
                <nav className=' w-full text-center'>
                    <ul className={`md:flex absolute md:static duration-300 ease-in bg-indigo-100  w-full ${open ? 'top-14' : 'top-[-190px]'}`}>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/home'>HOME</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/reviews'>REVIEWS</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/dashboard'>DASHBOARD</CustomLink>
                        <CustomLink className='font-semibold text-lg md:mr-6' to='/contact'>CONTACT</CustomLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
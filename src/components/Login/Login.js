import { UserAddIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-16 mx-auto container px-6'>
            <div className='max-w-[500px] mx-auto bg-gray-700 py-20 px-8 rounded-md shadow-md shadow-zinc-500'>
                <form>
                    <h2 className='text-4xl font-bold text-white'>Login <UserAddIcon className='w-10 text-sky-500 inline'></UserAddIcon> </h2>
                    <input className='bg-sky-200 border-0 rounded-md my-3 w-full' type="email" name="email" placeholder='Enter your email' id="" />
                    <p className='text-center text-lg text-white font-semibold'>Or</p>
                    <input className='bg-sky-200 rounded-md border-0 mt-3 w-full' type="email" name="user " placeholder='Enter your user name ' id="" />
                    <input className='bg-sky-200 rounded-md border-0 mt-5 w-full' type="password" name="pass" placeholder='Enter your password' id="" />
                    <p className='text-center mt-8'><Link className='text-white text-lg rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 duration-300 bg-sky-800 px-4 py-2' to='/'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
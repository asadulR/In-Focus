import React from 'react';
import { Link } from 'react-router-dom';
import camera from './../../images/camera.png';
const Home = () => {
    return (
        <div className='container px-6 mx-auto'>
            <div className='grid justify-between items-center md:grid-cols-2 py-16'>
                <div className='order-2 sm:order-1'>
                    <h1 className='text-lg font-bold mb-2 text-gray-500 md:text-2xl lg:text-5xl'>Highly rated by customers</h1>
                    <h1 className='text-lg font-bold text-blue-600 md:text-3xl lg:text-5xl'>Your Best Camera</h1>

                    <p className='my-5 text-gray-700'>
                    As opposed to digital SLR cameras, point and shoot cameras are compact, easy-to-use and provide great picture quality without much effort. In order to use these cameras, the user only needs to press the shutter button. The camera automatically adjusts the shutter speed, aperture, focus and light sensitivity.
                    </p>
                    <Link className='bg-indigo-100 py-2 px-3 text-blue-700 font-semibold  rounded-md' to='/'>Live Demo</Link>
                </div>
                <div className='text-center order-1 sm:order-2'>
                    <img src={camera} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
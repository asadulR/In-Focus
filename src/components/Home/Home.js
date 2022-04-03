import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import HomePageReviews from '../Reviews/HomePageReviews';
import camera from './../../images/camera.png';
const Home = () => {
    const [reviews, setReviews] = useReviews();
    const slicedReviews = reviews.slice(0, 3);
    return (
        <div className='container px-6 mx-auto'>
            <div className='grid justify-between gap-4 items-center md:grid-cols-2 py-16'>
                <div className='order-2 sm:order-1'>
                    <h1 className='text-lg font-bold mb-2 text-gray-500 md:text-2xl lg:text-5xl'>Highly rated by customers</h1>
                    <h1 className='text-lg font-bold text-blue-600 md:text-3xl lg:text-5xl'>Your Best Camera</h1>

                    <p className='my-5 text-gray-700'>
                        As opposed to digital SLR cameras, point and shoot cameras are compact, easy-to-use and provide great picture quality without much effort. In order to use these cameras, the user only needs to press the shutter button. The camera automatically adjusts the shutter speed, aperture, focus and light sensitivity.
                    </p>
                    <Link className='bg-indigo-100 py-2 px-3 text-blue-700 font-semibold  rounded-md' to='/'>Live Demo</Link>
                </div>
                <div className='text-center p-2 order-1 sm:order-2'>
                    <img src={camera} alt="" />
                </div>
            </div>
            <div className='my-12'>
                <h1 className='text-center text-lg font-bold md:text-4xl text-gray-800 lg:text-5xl'>Customer Reviews</h1>
                <div className='my-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        slicedReviews.map(review => <HomePageReviews
                            key={review.id}
                            review={review}
                        ></HomePageReviews>)
                    }
                </div>

                <div className='text-center'>
                    <Link className='bg-indigo-100 py-2 px-5  text-blue-700 font-semibold  rounded-md' to='/reviews'>SEE ALL REVIEWS</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
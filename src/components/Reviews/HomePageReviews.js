import React from 'react';

const HomePageReviews = (props) => {
    const {name, img, ratings, review} = props.review;
    return (
        <div className='bg-gray-300 shadow-md shadow-zinc-500 p-1 rounded-lg translate hover:-translate-y-1 hover:scale-105 ease-in duration-300'>
            <div className='p-2  rounded-md  min-h-[500px]'>
                <img className='rounded-lg border-blue-400 border-4' src={img} alt="img" />
                <h4 className='text-center text-xl mt-1 font-semibold text-gray-800'>{name}</h4>
                <h4 className='text-center text-lg font-semibold text-gray-600'>Ratings: <span className=' text-yellow-400'>{ratings}</span></h4>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default HomePageReviews;
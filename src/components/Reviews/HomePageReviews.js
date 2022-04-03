import React from 'react';

const HomePageReviews = (props) => {
    const {name, img, ratings, review} = props.review
    return (
        <div className='bg-gray-300 p-2 rounded-lg'>
            <div className='p-2 border-4 rounded-md border-blue-400 min-h-[500px]'>
                <img className='rounded-lg' src={img} alt="img" />
                <h4 className='text-center text-xl mt-1 font-semibold text-gray-800'>{name}</h4>
                <h4 className='text-center text-lg font-semibold text-gray-600'>Ratings: {ratings}</h4>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default HomePageReviews;
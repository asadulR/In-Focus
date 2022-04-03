import React from 'react';

const Review = (props) => {
    const { name, img, ratings, review } = props.review

    return (
        <div className='bg-gray-300 p-1 rounded-lg'>
            <div className='p-2 rounded-md  min-h-[500px]'>
                <img className='rounded-lg  border-4 border-blue-400' src={img} alt="img" />
                <h4 className='text-center text-xl mt-1 font-semibold text-gray-800'>{name}</h4>
                <h4 className='text-center text-lg font-semibold text-gray-600'>Ratings: {ratings}</h4>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;
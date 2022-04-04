import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const AllReviews = () => {
    const [reviews] = useReviews();
    return (
        <div className=''>
            <div className='container mx-auto px-4 my-16'>
                <h1 className='text-center text-2xl font-bold md:text-4xl text-gray-800 lg:text-5xl'>What our customers say!</h1>
                <div className='my-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllReviews;
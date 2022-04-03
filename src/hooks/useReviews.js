import { useEffect, useState } from 'react';

const useReviews = () => {

   const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('productReviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, []);
    // console.log(reviews);
    return [reviews, setReviews];
}



export default useReviews;
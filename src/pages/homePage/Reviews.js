import React, { useState } from 'react';
import useAllReviews from '../customHooks/useAllReviews';
import Loading from '../shared/Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allReviews, refetch } = useAllReviews(intervalMs)
    // const reversedReviews = allReviews?.reverse();

    if (isLoading) {
        return <Loading />
    }

    // reversing the array of objects
    const reversedReviews = [...allReviews].reverse();

    return (
        <section className="text-gray-600 body-font h-[75vh] overflow-y-auto  py-12">
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-20 ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">All Latest Reviews : {reversedReviews?.length}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Reflection of our customer's satisfactions.</p>
                </div>
                <div className="m-4 text-center pb-12">


                    {
                        reversedReviews?.map(review =>
                            <SingleReview key={review._id} review={review} />
                        )
                    }
                    

                </div>
            </div>
        </section>
    );
};

export default Reviews;
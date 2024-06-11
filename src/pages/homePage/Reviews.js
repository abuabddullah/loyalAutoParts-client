// import React, { useState } from 'react';
// import useAllReviews from '../customHooks/useAllReviews';
// import Loading from '../shared/Loading/Loading';
// import SingleReview from './SingleReview';

// const Reviews = () => {
//     // GET all availble non booked services by useQuery
//     const [intervalMs, setIntervalMs] = useState(1000)
//     const { isLoading, error, data: allReviews, refetch } = useAllReviews(intervalMs)
//     // const reversedReviews = allReviews?.reverse();

//     if (isLoading) {
//         return <Loading />
//     }

//     // reversing the array of objects
//     const reversedReviews = [...allReviews].reverse();

//     return (
//         <section className="text-gray-600 body-font h-[75vh] overflow-y-auto  py-12">
//             <div className="container mx-auto">
//                 <div className="flex flex-col text-center w-full mb-20 ">
//                     <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">All Latest Reviews : {reversedReviews?.length}</h1>
//                     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Reflection of our customer's satisfactions.</p>
//                 </div>
//                 <div className="text-center">


//                     {
//                         reversedReviews?.map(review =>
//                             <SingleReview key={review._id} review={review} />
//                         )
//                     }


//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Reviews;













import React, { useEffect, useState } from 'react';
import useAllReviews from '../customHooks/useAllReviews';
import Loading from '../shared/Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {

    // Pagination startTransition
    const [noOfPages, setNoOfPages] = useState(0);
    const [perPageProducts, setPerPageProducts] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);


    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allReviews, refetch } = useAllReviews(intervalMs,currentPage,perPageProducts)

    // get total product count from db and set total page
    useEffect(() => {
        const url = `https://loyalautoparts-server.onrender.com/reviewsCount`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const noOfProducts = data.count;
                const reqNoOfPages = Math.ceil(noOfProducts / perPageProducts);
                setNoOfPages(reqNoOfPages);

            });
    }, [perPageProducts]);

    if (currentPage > noOfPages) {
        setCurrentPage(noOfPages);
    }

    if (currentPage < 0) {
        setCurrentPage(0);
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="text-gray-600 body-font h-[75vh] overflow-y-auto  py-12">
            <div className="container mx-auto">
                <div className="flex flex-col text-center w-full mb-20 ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">All Latest Reviews</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Reflection of our customer's satisfactions.</p>
                </div>
                <div className="text-center">


                    {
                        allReviews?.map(review =>
                            <SingleReview key={review._id} review={review} />
                        )
                    }


                </div>


                <div class="btn-group justify-center mt-12">
                    <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    class="btn btn-primary text-white">«</button>
                    <button class="btn btn-primary text-white">Page {currentPage + 1} of {noOfPages}</button>
                    <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    class="btn btn-primary text-white">»</button>
                </div>


            </div>
        </section>
    );
};

export default Reviews;














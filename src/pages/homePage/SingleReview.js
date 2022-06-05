import React from 'react';

const SingleReview = ({ review }) => {
    const { name, email, review: reviewText, rate, photoURL } = review || {};
    return (
        <div className="flex w-full mb-3 mx-auto overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg dark:bg-gray-800 ">
            <div className="w-1/3 flex items-center justify-center">
                <img
                    className='object-cover rounded-full w-24 h-24'
                    src={photoURL || "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"} alt="" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{email}</p>

                <div className="flex mt-2 item-center justify-center">
                    {
                        [...Array(rate).keys()].map((pNum, index) => <svg
                            key={index}
                            className="w-5 h-5 text-primary fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>)
                    }
                    {
                        [...Array(5 - rate).keys()].map((pNum, index) => <svg
                            key={index}
                            className="w-5 h-5 text-base-300 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleReview;
// import React from 'react';
// import { useQuery } from 'react-query';

// const useAllReviews = (intervalMs) => {
//     const { isLoading, error, data, refetch } = useQuery(['allReviews', intervalMs], () =>
//         fetch(`https://loyalautoparts-server.onrender.com/reviews`)
//             .then(res =>
//                 res.json()
//             ),
//         // {
//         //     // Refetch the data every second
//         //     refetchInterval: intervalMs,
//         // }
//     )
//     return { isLoading, error, data, refetch }
// };

// export default useAllReviews;




import { useQuery } from 'react-query';

const useAllReviews = (intervalMs,currentPage,perPageProducts) => {
    const { isLoading, error, data, refetch } = useQuery(['allReviews', intervalMs], () =>
        fetch(`https://loyalautoparts-server.onrender.com/reviews?currentPage=${currentPage}&perPageProducts=${perPageProducts}`)
            .then(res =>
                res.json()
            ),
        {
            // Refetch the data every second
            refetchInterval: intervalMs,
        }
    )
    return { isLoading, error, data, refetch }
};

export default useAllReviews;





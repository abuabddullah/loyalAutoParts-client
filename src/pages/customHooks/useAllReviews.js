import React from 'react';
import { useQuery } from 'react-query';

const useAllReviews = (intervalMs) => {
    const { isLoading, error, data, refetch } = useQuery(['allReviews', intervalMs], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/reviews`)
            .then(res =>
                res.json()
            ),
        // {
        //     // Refetch the data every second
        //     refetchInterval: intervalMs,
        // }
    )
    return { isLoading, error, data, refetch }
};

export default useAllReviews;
import React from 'react';
import { useQuery } from 'react-query';

const useReview = (user,intervalMs) => {
    const { isLoading, error, data, refetch } = useQuery(['reviews', user,intervalMs], () =>
        fetch(`http://localhost:5000/reviews/${user?.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
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

export default useReview;
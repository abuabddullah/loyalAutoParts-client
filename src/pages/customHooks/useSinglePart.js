import React from 'react';
import { useQuery } from 'react-query';

const useSinglePart = (id,user,intervalMs) => {
    const { isLoading, error, data: part, refetch } = useQuery(['parts', id, user,intervalMs], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/parts/${id}`, {
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
    return { isLoading, error, data: part, refetch }
};

export default useSinglePart;
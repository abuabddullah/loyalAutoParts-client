import React from 'react';
import { useQuery } from 'react-query';

const useAllParts = (intervalMs) => {
    const { isLoading, error, data, refetch } = useQuery(['allParts', intervalMs], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/parts`)
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

export default useAllParts;
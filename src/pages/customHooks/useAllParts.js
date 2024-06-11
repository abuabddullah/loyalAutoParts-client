import { useQuery } from 'react-query';

const useAllParts = (intervalMs) => {
    const { isLoading, error, data, refetch } = useQuery(['allParts', intervalMs], () =>
        fetch(`https://loyalautoparts-server.onrender.com/parts`)
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
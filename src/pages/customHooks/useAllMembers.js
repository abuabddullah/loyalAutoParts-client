import { useQuery } from 'react-query';

const useAllMembers = (intervalMs) => {
    const { isLoading, error, data, refetch } = useQuery(['allMembers', intervalMs], () =>
        fetch(`https://loyalautoparts-server.onrender.com/members`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
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

export default useAllMembers;
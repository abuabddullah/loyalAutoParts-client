import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
const email = user?.email;
if (email) {
    fetch(`http://localhost:5000/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin);
            setAdminLoading(false);
        })
        .catch(err => {
            setAdmin(false);
            setAdminLoading(false);
        })
}
    }, [admin, setAdmin, adminLoading, setAdminLoading,user])

    return [admin, setAdmin,adminLoading, setAdminLoading];
};

export default useAdmin;
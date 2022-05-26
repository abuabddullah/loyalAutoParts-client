import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../customHooks/useAdmin';
import Loading from '../shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user);
    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading />
    }

    if (!user || !admin) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/home')
    }

    return children;
};

export default RequireAdmin;
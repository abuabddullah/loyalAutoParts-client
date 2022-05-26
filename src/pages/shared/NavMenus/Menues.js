import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Menues = () => {

    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);
    };
    return (
        <>
            <li><NavLink to="/home" className="rounded-md">Home</NavLink></li>
            <li><NavLink to="/allParts" className="rounded-md">All Parts</NavLink></li>
            <li><NavLink to="/blogs" className="rounded-md">Blogs</NavLink></li>
            <li><NavLink to="/contact" className="rounded-md">Contact</NavLink></li>
            <li><NavLink to="/portfolio" className="rounded-md">Port Folio</NavLink></li>
            {
                user && <>
                    <li><NavLink to="/dashBoard" className="rounded-md">Dashboard</NavLink></li>
                </>
            }
            {
                user ? <li>
                    <span
                        onClick={logout}
                    >Logout</span>
                </li> : <li><NavLink to="/login" className="rounded-md">Login</NavLink></li>
            }
        </>
    );
};

export default Menues;
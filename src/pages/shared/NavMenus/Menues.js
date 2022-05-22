import React from 'react';
import { NavLink } from 'react-router-dom';

const Menues = () => {
    return (
        <>
            <li><NavLink to="/home" className="rounded-md">Home</NavLink></li>
            <li><NavLink to="/dashBoard" className="rounded-md">Dashboard</NavLink></li>
            <li><NavLink to="/blogs" className="rounded-md">Blogs</NavLink></li>
            <li><NavLink to="/login" className="rounded-md">Login</NavLink></li>
        </>
    );
};

export default Menues;
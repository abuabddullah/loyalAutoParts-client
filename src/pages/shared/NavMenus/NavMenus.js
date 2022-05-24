import React from 'react';
import Menues from './Menues';
import logo from './../../../assets/logoIcons/Loyal Cars-logos_black.png'
import { useNavigate } from 'react-router-dom';

const NavMenus = ({ children }) => {
    const navigate = useNavigate();
    return (
        <main className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <header className="navbar z-50 sticky top-0 bg-white border-b-2 overflow-hidden">
                    <div className="container mx-auto">
                        <div className="flex-1 px-2 mx-2">
                            <img
                                onClick={() => navigate('/')}
                                className='w-40 max-w-full cursor-pointer' src={logo} alt="" />
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <nav className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <Menues />
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <nav className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-base-100">
                    <Menues />
                </ul>

            </nav>
        </main>
    );
};

export default NavMenus;
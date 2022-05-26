import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../customHooks/useAdmin';
import Loading from '../shared/Loading/Loading';

const DashBoard = () => {
    const [user, error, loading] = useAuthState(auth)
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user);


    if (loading || adminLoading) {
        return <Loading />
    }


    return (
        <div className="drawer drawer-mobile">
            <input id="dashBoard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* <!-- Page content here --> */}
                <div className="flex flex-col text-center w-full my-8">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary mb-2">Welcome to Dashboard</h1>
                    <hr className='w-1/4 mx-auto border-primary mb-0' />
                </div>


                <Outlet />


            </div>
            <div className="drawer-side border-r-2">
                <label htmlFor="dashBoard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashBoard" className="rounded-md">My Profile</Link></li>



                    {
                        admin ? <>
                            {/* // only for admin */}
                            <li><NavLink to="/dashBoard/manageOrders" className="rounded-md">Manage All Orders</NavLink></li>
                            <li><NavLink to="/dashBoard/addProduct" className="rounded-md">Add A Product</NavLink></li>
                            <li><NavLink to="/dashBoard/manageAdmins" className="rounded-md">Make Admin</NavLink></li>
                            <li><NavLink to="/dashBoard/manageProducts" className="rounded-md">Manage Products</NavLink></li>
                        </> : <>
                            {/* // only for users */}
                            <li><NavLink to="/dashBoard/myOrders" className="rounded-md">My Orders</NavLink></li>
                            <li><NavLink to="/dashBoard/myReview" className="rounded-md">Add A Review</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;
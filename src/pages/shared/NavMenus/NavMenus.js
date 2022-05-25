// import React from 'react';
// import Menues from './Menues';
// import logo from './../../../assets/logoIcons/Loyal Cars-logos_black.png'
// import { useNavigate } from 'react-router-dom';

// const NavMenus = ({ children }) => {
//     const navigate = useNavigate();
//     return (
//         <main className="drawer drawer-end">
//             <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col">
//                 {/* <!-- Navbar --> */}
//                 <header className="navbar z-50 sticky top-0 bg-white border-b-2 overflow-hidden">
//                     <div className="container mx-auto">
//                         <div className="flex-1 px-2 mx-2">
//                             <img
//                                 onClick={() => navigate('/')}
//                                 className='w-40 max-w-full cursor-pointer' src={logo} alt="" />
//                         </div>
//                         <div className="flex-none lg:hidden">
//                             <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//                             </label>
//                         </div>
//                         <nav className="flex-none hidden lg:block">
//                             <ul className="menu menu-horizontal">
//                                 <Menues />
//                             </ul>
//                         </nav>
//                     </div>
//                 </header>
//                 {/* <!-- Page content here --> */}
//                 {children}
//             </div>
//             <nav className="drawer-side">
//                 <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
//                 <ul className="menu p-4 overflow-y-auto w-64 bg-base-100">
//                     <Menues />
//                 </ul>

//             </nav>
//         </main>
//     );
// };

// export default NavMenus;





import React from 'react';
import Menues from './Menues';
import logo from './../../../assets/logoIcons/Loyal Cars-logos_black.png'
import { Link, useNavigate } from 'react-router-dom';

const NavMenus = () => {
    return (
        <div class="navbar bg-base-100 sticky top-0 border-b-[1px] z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Menues />
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">Loyal Auto Parts</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Menues />
                </ul>
            </div>
        </div>
    );
};

export default NavMenus;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from './../../assets/notfound/notfound.jpg'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={notfound} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-gray-900">404 ! 
                        <br className="hidden lg:inline-block" /> Page Not Found
                    </h1>
                    <div className="flex justify-center">
                        <button 
                        onClick={() => navigate('/home')}
                        className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Go Home →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
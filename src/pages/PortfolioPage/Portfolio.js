import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">Portfolio</h1>
                </div>

                <div className='border-b-2 pb-4 mb-6 border-black'>
                    <h1 className="text-5xl font-bold">
                        ASIF A OWADUD
                    </h1>
                    <p className='text-xl font-bold mt-2'>FRONTEND DEVELOPER | REACT | NODE</p>
                </div>

                <div className=' mb-6 '>
                    <p className='text-2xl'><strong>Address : </strong>Dhaka, Bangladesh</p>
                    <p className='text-2xl'><strong>Email : </strong>asifaowadud@gmail.com</p>
                    <p className='text-2xl'><strong>GitHub : </strong>github.com/abuabddullah</p>
                    <p className='text-2xl'><strong>Mobile : </strong>+880-1939032974</p>
                    <p className='text-2xl'><strong>Linkedin : </strong>linkedin.com/asifaowadud</p>
                </div>
                <div className=' mb-6 '>
                    <h1 className="text-3xl font-bold border-b-2 pb-4 border-black mb-6">
                        Education
                    </h1>
                    <p className='text-2xl'><strong>Graduation : </strong>BSc in Textile Engineering</p>
                </div>
                <div className=' mb-6 '>
                    <h1 className="text-3xl font-bold border-b-2 pb-4 border-black mb-6">
                        Skills
                    </h1>
                    <p className='text-2xl'><strong>EXPERTISE : </strong>HTML 5, CSS 3, BootStrap 5, Tailwind, JavaScript, ES6,
                        React, SPA, React Router, Rest API, Reack Hook</p>
                    <p className='text-2xl'><strong>COMFORTABLE : </strong>Node JS, Express JS, Firebase, SASS, Mongo DB</p>
                    <p className='text-2xl'><strong>FAMILIAR : </strong>C, C ++, Scratch</p>
                    <p className='text-2xl'><strong>TOOLS : </strong>GitHub, Netlify, Heroku, Chrome Dev Tool, Sendgrid,
                        Mailgun, Codepen, Node Mailer, Vs Code, Postman, Figma, Stripe</p>
                </div>
                <div className=' mb-6 '>
                    <h1 className="text-3xl font-bold border-b-2 pb-4 border-black mb-6">
                        PROJECTS
                    </h1>



                    <h1 className="text-4xl font-bold mt-12 mb-6">
                        SINGLE SERVICE PROVIDER
                    </h1>
                    <div className='text-2xl'><strong>FEATURES : </strong>
                        <ul className='ml-36'>
                            <li>[#] Displaying Services that a provides by a doctor..</li>
                            <li>[#] React protected routing system is implemented.</li>
                            <li>[#] Firebase authentication is used.</li>
                        </ul>
                    </div>
                    <div className='text-2xl'><strong>LINKS : </strong>
                        <ul className='ml-36'>
                            <li>[#]
                                <a href="https://myassignment-10.web.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500'> Live Site</a> |
                                <a href="https://github.com/abuabddullah/doctorAsifIndependentServiceProvider" target="_blank" rel="noopener noreferrer" className='text-blue-500'> GitHub Link (Client)</a>
                            </li>
                        </ul>
                    </div>



                    <h1 className="text-4xl font-bold mt-12 mb-6">
                        E-COMMERCE SITE
                    </h1>
                    <div className='text-2xl'><strong>FEATURES : </strong>
                        <ul className='ml-36'>
                            <li>[#] Local storage utilization for saving records</li>
                            <li>[#] Pagination implemented without any libraries.</li>
                            <li>[#] Firebase authentication is used, Protected routing , Nested routing
                                implemented</li>
                        </ul>
                    </div>
                    <div className='text-2xl'><strong>LINKS : </strong>
                        <ul className='ml-36'>
                            <li>[#]
                                <a href="https://emajhon-shopping-ecommerce.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500'> Live Site</a> |
                                <a href="https://github.com/abuabddullah/Ema-Jhon" target="_blank" rel="noopener noreferrer" className='text-blue-500'> GitHub Link (Client)</a> |
                                <a href="https://github.com/abuabddullah/Ema-jhon-server-" target="_blank" rel="noopener noreferrer" className='text-blue-500'> GitHub Link (Server)</a>
                            </li>
                        </ul>
                    </div>



                    <h1 className="text-4xl font-bold mt-12 mb-6">
                        WAREHOUSE MANAGEMENT
                    </h1>
                    <div className='text-2xl'><strong>FEATURES : </strong>
                        <ul className='ml-36'>
                            <li>[#] Maintain and track the stock quantity as per Item by the help of Mongo DB
                                and Node JS.</li>
                            <li>[#] Prevented Unauthorized access so that website privacy remains safe and
                                protected.</li>
                            <li>[#] Basic CRUD operations are implemented to ensure more dynamic user
                                experience</li>
                        </ul>
                    </div>
                    <div className='text-2xl'><strong>LINKS : </strong>
                        <ul className='ml-36'>
                            <li>[#]
                                <a href="https://thirstydrinks-11.web.app/" target="_blank" rel="noopener noreferrer" className='text-blue-500'> Live Site</a> |
                                <a href="https://github.com/abuabddullah/thirstDyrinksWareHouseManagement" target="_blank" rel="noopener noreferrer" className='text-blue-500'> GitHub Link (Client)</a> |
                                <a href="https://github.com/abuabddullah/thirstDyrinksWareHouseManagement-server-" target="_blank" rel="noopener noreferrer" className='text-blue-500'> GitHub Link (Server)</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Portfolio;
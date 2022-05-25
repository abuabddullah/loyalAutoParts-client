import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, userError] = useAuthState(auth);
    const email = user?.email;
    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: userMember, refetch } = useQuery(['allParts', intervalMs], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/members/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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

    const { role, address, education, linkedin, name, phone, photoURL } = userMember || {};
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary mb-2">Profile</h1>
            </div>
            <div className="p-8 md:p-10">
                <div className="md:p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">22</p>
                                <p className="text-gray-400">Regular</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">10</p>
                                <p className="text-gray-400">Customer</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">89</p>
                                <p className="text-gray-400">Comments</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img
                                    className="h-24 w-24 rounded-full"
                                    src={photoURL || user?.photoURL} alt="" />

                            </div>
                        </div>
                        <div className="md:space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button
                                onClick={() => navigate('/dashBoard/upadateProfile')}
                                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> Update</button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-red-700 hover:bg-red-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> {role || "Customer"}</button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">{name || user?.displayName}, <span className="font-light text-gray-500">27</span></h1>
                        <p className="font-light text-gray-600 mt-3">Email : {email}</p>
                        <p className="font-light text-gray-600 mt-3">Phone : {phone || user?.phoneNumber || "Plz update"}</p>
                        <p className="font-light text-gray-600 mt-3">Location : {address || "Plz update"}</p>
                        <p className="mt-6 text-gray-500">Education : {education || "Plz update"}</p>
                        <p className="mt-2 text-gray-500">
                            LinkedIn : <button>{linkedin || "Plz update"}</button>
                        </p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        <button className="text-indigo-500 py-2 px-4  font-medium mt-4"> Show more</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;

import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';


const UpadateProfile = () => {

    // redirect to previous page
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let [user, loading, UserError] = useAuthState(auth);
console.log(user);

    //handle order submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const email = user.email;
        const updateUserInfo = data;
        // console.log("updateUserInfo",updateUserInfo,email);
        const url = `http://localhost:5000/members/${email}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updateUserInfo),
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                toast.success("Profile updated successfully");
                // navigate(from);
                reset();
            })
            .catch(err => {
                console.log("err", err);
                toast.error("Error updating profile");
            })

    }


    return (
        <>
            <div className="flex flex-col text-center w-full mt-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-primary">Update Profile</h1>
            </div>




            <form
            className='px-4 w-full max-w-lg mx-auto'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Enter your name"
                            {...register("name")}
                            value={user?.displayName}
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
                        <input
                            type="text"
                            id="email"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="yourmail@provider.com"
                            {...register("email")}
                            value={user?.email}
                            readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="text-sm text-gray-700 block mb-1 font-medium">Photo Url</label>
                        <input
                            type="text"
                            id="photoURL"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Photo"
                            {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: 'photoURL required'
                                }
                            })}
                            defaultValue={user?.photoURL}
                        />
                        <label className="label">
                            {errors.photoURL?.type === 'required' && <span className="label-text-alt text-red-500">{errors.photoURL.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="address" className="text-sm text-gray-700 block mb-1 font-medium">Address</label>
                        <input
                            type="text"
                            id="address"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Address"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-gray-700 block mb-1 font-medium">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Phone number"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'phone number required'
                                }
                            })}
                            defaultValue={user?.phoneNumber}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="education" className="text-sm text-gray-700 block mb-1 font-medium">Education</label>
                        <input
                            type="text"
                            id="education"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Education"
                            {...register("education")}
                        />
                    </div>
                    <div>
                        <label htmlFor="linkedin" className="text-sm text-gray-700 block mb-1 font-medium">Linkedin</label>
                        <input
                            type="text"
                            id="linkedin"
                            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                            placeholder="Linkedin"
                            {...register("linkedin")}
                        />
                    </div>
                </div>
                <div className="space-x-4 mt-8">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-primary text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50">Update Profile</button>

                    <button
                        onClick={() => navigate(from, { replace: true })}
                        className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                </div>
            </form>


            <div className='text-center mt-12'>
                <button
                    onClick={() => navigate('/dashBoard')}
                    className="btn btn-wide btn-primary text-white">Check Profile →</button>
            </div>
        </>
    );
};

export default UpadateProfile;
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSinglePart from '../customHooks/useSinglePart';

const UpadatePart = () => {
    //Get user information
    const [user, loading, userError] = useAuthState(auth);

    const { _id } = useParams();
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: singlePart, refetch } = useSinglePart(_id, user, intervalMs)

    const { name, image, description, minQty, availableQty, price } = singlePart || {};

    // console.log(name);

    // redirect to previous page
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //handle order submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const partInfo = data;
        console.log(partInfo);
        const url = `https://stark-chamber-79715.herokuapp.com/manageProducts/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(partInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // navigate(from);
                refetch();
                reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Upadate Part</h1>
                Id : {_id}
            </div>
            <div className="p-8 rounded border border-gray-200 w-3/4 ">
                <h1 className="font-medium text-3xl">{name}</h1>
                <p className="text-gray-600 mt-6">{description}</p>

                <div className="card md:card-side bg-base-100 my-12 shadow md:shadow-none">
                    <figure
                        className='md:w-1/2'
                    ><img src={image} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Order Info!</h2>
                        <p>Available Quantity : {availableQty}</p>
                        <p>Unit Price : ${price}</p>
                        <p>Min Order Quantity : {minQty}</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Plese provide info bellow . . .</h1>
                    <div className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Enter your name"
                                {...register("adminName")}
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
                                {...register("adminEmail")}
                                value={user?.email}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="availableQty" className="text-sm text-gray-700 block mb-1 font-medium">AvailableQty</label>
                            <input
                                type="text"
                                id="availableQty"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="AvailableQty"
                                {...register("availableQty")}
                                defaultValue={availableQty}
                            />
                        </div>
                        <div>
                            <label htmlFor="Min-Order-Qty" className="text-sm text-gray-700 block mb-1 font-medium">Min-Order-Qty</label>
                            <input
                                type="text"
                                id="Min-Order-Qty"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Min-Order-Qty"
                                {...register("minQty")}
                                defaultValue={minQty}
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
                            <input
                                type="text"
                                id="price"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Price"
                                {...register("price")}
                                defaultValue={price}
                            />
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-primary text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50">Update</button>

                        <button
                            onClick={()=>reset()}
                            className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default UpadatePart;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user, loading, userError] = useAuthState(auth);
    //handle order submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const partInfo = data;
        console.log(partInfo);
        const url = `https://loyalautoparts-server.onrender.com/addProducts`;

        fetch(url, {
            method: 'POST',
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
                // refetch();
                reset();
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Add Product</h1>
            </div>
            <div className="p-8 rounded border border-gray-200 w-3/4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Plese provide info bellow . . .</h1>
                    <div className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="adminName" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                id="adminName"
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
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Parts Name</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Parts name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Parts Name required'
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Name length maximum 20 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="description" className="text-sm text-gray-700 block mb-1 font-medium">Description</label>
                            <textarea
                                type="text"
                                id="description"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="Description"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'description required'
                                    },
                                    minLength: {
                                        value: 50,
                                        message: 'Name length minimum 50 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                {errors.description?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="image" className="text-sm text-gray-700 block mb-1 font-medium">Image URL</label>
                            <input
                                type="text"
                                id="image"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="image"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="availableQty" className="text-sm text-gray-700 block mb-1 font-medium">AvailableQty</label>
                            <input
                                type="text"
                                id="availableQty"
                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                placeholder="AvailableQty"
                                {...register("availableQty")}
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
                            />
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button
                            type="submit"
                            className="py-2 px-4 bg-primary text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50">Add</button>

                        <button
                            onClick={() => reset()}
                            className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
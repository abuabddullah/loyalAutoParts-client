
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useSinglePart from '../customHooks/useSinglePart';
import Loading from '../shared/Loading/Loading';

const Purchase = () => {
    //Get user information
    const [user, loading, userError] = useAuthState(auth);

    const { id } = useParams();
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: singlePart, refetch } = useSinglePart(id, user, intervalMs)

    const { name, image, description, minQty, availableQty, price } = singlePart || {};


    const [finalAvailableQty, setFinalAvailableQty] = useState(0)
    const [finalOrderQty, setFinalOrderQty] = useState(0)
    const [finalTotalPrice, setFinalTotalPrice] = useState(0)
    const [orderQtyError, setOrderQtyError] = useState('')
    const [isActivate, setIsActivate] = useState(false)


    useEffect(() => {
        const minQtyInNumber = parseInt(minQty)
        const availableQtyInNumber = parseInt(availableQty)
        const priceInNumber = parseInt(price)

        setFinalOrderQty(minQtyInNumber)
        setFinalAvailableQty(availableQtyInNumber)
        setFinalTotalPrice(minQtyInNumber * priceInNumber)

    }, [minQty, price, availableQty])


    // handle order qty change
    const handleOrderQtyPrice = (e) => {
        e.preventDefault();

        const adjustedOrderQty = parseInt(e.target.qty2Order.value)
        if (adjustedOrderQty > availableQty) {
            setOrderQtyError('Sorry, we do not have enough stock to fulfill your order.')
            return
        } else if (adjustedOrderQty < minQty || !adjustedOrderQty) {
            setOrderQtyError(`Sorry , you can not order less than the minimum quantity ${minQty}`)
            return
        } else {
            setOrderQtyError('')
            setFinalOrderQty(adjustedOrderQty)
            setFinalTotalPrice(adjustedOrderQty * price)
            setFinalAvailableQty(availableQty - adjustedOrderQty)
        }
        e.target.qty2Order.value = '0';
        setIsActivate(true)
    }




    // redirect to previous page
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const orderQtyPriceInfo = {
        orderQty: finalOrderQty,
        totalPrice: finalTotalPrice,
        partId: id,
        partName: name,
        partImage: image,
        partDescription: description,
        paid : false,
    }


    //handle order submit
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const orderInfo = { ...data, ...orderQtyPriceInfo };
        // console.log(orderInfo);
        // console.log(finalAvailableQty);


        // add newest order to orders collection or update order price and qty if old order exists
        const url = 'https://stark-chamber-79715.herokuapp.com/orders';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                } else {
                    console.log(`Your order has been placed successfully.`)
                    // reset form
                    reset()
                    // redirect to previous page
                    // navigate(from)
                }
            })
            .catch(err => {
                toast.error(err.message)
            })


        // update latest available qty in parts collection
        const url2 = `https://stark-chamber-79715.herokuapp.com/parts/${id}`;
        fetch(url2, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ newQty: finalAvailableQty })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error)
                } else {
                    toast.success(`Your order has been placed successfully.`)
                    // reset form
                    reset()
                    // redirect to previous page
                    // navigate(from)
                }
            })
            .catch(err => {
                toast.error(err.message)
            })

        setIsActivate(false)

    }


    if (isLoading || loading) {
        return <Loading />
    }

    return (
        <section>
            <div className="container mx-auto mt-8 md:my-24">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">Want to purchase ?</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">id : {id}</p>
                </div>
                <div className="p-8 rounded border border-gray-200">
                    <h1 className="font-medium text-3xl">{name}</h1>
                    <p className="text-gray-600 mt-6">{description}</p>

                    <div className="card md:card-side bg-base-100 my-12 shadow md:shadow-none">
                        <figure
                            className='md:w-1/2'
                        ><img src={image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Order Info!</h2>
                            <p>Available Quantity : {finalAvailableQty}</p>
                            <p>Unit Price : ${price}</p>
                            <p>Order Quantity : {finalOrderQty}</p>
                            <p>Total Price : ${finalTotalPrice}</p>

                            <form
                                className='grid md:grid-cols-2 gap-4'
                                // className='mt-4 text-center'
                                onSubmit={handleOrderQtyPrice}>
                                <input
                                    type="number"
                                    name='qty2Order'
                                    placeholder="Update quantity"
                                    className="input input-bordered input-success w-full max-w-xs"
                                    defaultValue={minQty}
                                />
                                <button
                                    type='submit'
                                    className='btn btn-primary text-white'
                                >Update order Qty</button>
                            </form>
                            {
                                orderQtyError ? <p className="py-4 text-red-600 text-center"><code>{orderQtyError}</code></p> : <p className="py-4 text-secondary text-center"><code>Minumum order quantity is {minQty} and you cant order over {availableQty}</code></p>
                            }

                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-600">Plese provide info bellow . . .</h1>
                        <div className="mt-8 space-y-6">
                            <div>
                                <label for="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
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
                                <label for="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
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
                                <label for="address" className="text-sm text-gray-700 block mb-1 font-medium">Address</label>
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
                                <label for="phone" className="text-sm text-gray-700 block mb-1 font-medium">Phone</label>
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
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className="space-x-4 mt-8">
                            <button
                                disabled={!isActivate}
                                type="submit"
                                className="py-2 px-4 bg-primary text-white rounded hover:bg-green-600 active:bg-green-700 disabled:opacity-50">Order</button>

                            <button
                                onClick={() => navigate(from, { replace: true })}
                                className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col w-full border-opacity-50 my-8">
                    <div className="grid card rounded-box place-items-center">
                        <div className='text-center mt-12'>
                            <button
                                onClick={() => navigate('/allParts')}
                                className="btn btn-wide btn-primary text-white">See All Parts →</button>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                    <div className="grid card rounded-box place-items-center">
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/home')}
                                className="btn btn-wide btn-primary text-white">Go Home →</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Purchase;
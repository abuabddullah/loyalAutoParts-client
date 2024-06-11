import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import OrdersTableHeader from './OrdersTableHeader';

const MyOrders = () => {
    const [user, loading, error4User] = useAuthState(auth);
    const [intervalMs, setIntervalMs] = useState(1000);
    const { isLoading, error, data: allOrders, refetch } = useQuery(['allorders', intervalMs], () =>
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
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
    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">My Orders : {allOrders?.length}</h1>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <OrdersTableHeader />
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((order, index) =>
                                <tr className='hover'>
                                    <th>{index + 1}</th>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.orderQty}</td>
                                    <td>{order?.totalPrice}</td>
                                    <td>{order?.partName}</td>
                                    <td>
                                    {
                                        (order?.totalPrice && !order?.paid) && <Link to={`/dashBoard/payment/${order?._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>
                                    }
                                    {(order?.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <OrdersTableHeader />
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default MyOrders;
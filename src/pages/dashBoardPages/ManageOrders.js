// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
// import Loading from '../shared/Loading/Loading';
// import OrdersTableHeader from './OrdersTableHeader';

// const ManageOrders = () => {
//     const [intervalMs, setIntervalMs] = useState(1000)
//     const { isLoading, error, data: allOrders, refetch } = useQuery(['allOrders', intervalMs], () =>
//         fetch(`https://stark-chamber-79715.herokuapp.com/allOrders`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//             .then(res =>
//                 res.json()
//             ),
//         {
//             // Refetch the data every second
//             refetchInterval: intervalMs,
//         }
//     )

//     if (isLoading) {
//         return <Loading />
//     }


//     const handleDelete = (id) => {
//         const proceed = window.confirm('Are you sure you want to delete this order?');
//         if (proceed) {
//             console.log(id);
//             fetch(`https://stark-chamber-79715.herokuapp.com/allOrders/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     refetch();
//                 })
//         }
//     }


//     const handleShiping = (id) => {
//         fetch(`https://stark-chamber-79715.herokuapp.com/allOrders/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 refetch();
//             })

//     }



//     return (
//         <>
//             <div className="flex flex-col text-center w-full my-8">
//                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Manage Orders</h1>
//                 All Orders : {allOrders?.length}
//             </div>


//             <div className="overflow-x-auto w-full">
//                 <table className="table table-compact w-full">
//                     <thead>
//                         <tr>
//                             <OrdersTableHeader />
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             allOrders?.map((order, index) =>
//                                 <tr className='hover'>
//                                     <th>{index + 1}</th>
//                                     <td>{order?.name}</td>
//                                     <td>{order?.email}</td>
//                                     <td>{order?.orderQty}</td>
//                                     <td>{order?.totalPrice}</td>
//                                     <td>{order?.partName}</td>
//                                     <td>
//                                         {
//                                             (order?.totalPrice && !order?.paid) && <>
//                                                 <span className='text-error mr-4'>Unpaid</span>
//                                                 <button
//                                                     onClick={() => handleDelete(order?._id)}
//                                                     className='btn btn-xs btn-error'>Remove</button>
//                                             </>
//                                         }
//                                         {
//                                             (order?.totalPrice && order.paid) && <>
//                                                 {
//                                                     (order?.shipped) ? <span className='text-white bg-primary mr-4 p-2'>Shipped</span> : <>
//                                                         <span className='text-success mr-4'>pending</span>
//                                                         <button
//                                                             onClick={() => handleShiping(order?._id)}
//                                                             className='btn btn-xs btn-success'>Ship Now</button>
//                                                     </>
//                                                 }

//                                             </>
//                                         }
//                                     </td>
//                                 </tr>
//                             )
//                         }

//                     </tbody>
//                     <tfoot>
//                         <tr>
//                             <OrdersTableHeader />
//                         </tr>
//                     </tfoot>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default ManageOrders;

































import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import OrdersTableHeader from './OrdersTableHeader';



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)




const ManageOrders = () => {
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allOrders, refetch } = useQuery(['allOrders', intervalMs], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/allOrders`, {
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

    if (isLoading) {
        return <Loading />
    }


    const handleDelete = (id) => {



        // sweet alert start

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {


                console.log(id);
                fetch(`https://stark-chamber-79715.herokuapp.com/allOrders/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        refetch();
                    })



                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your file is safe :)',
                    'error'
                )
            }
        })






        // sweet alert end




    }


    const handleShiping = (id) => {
        fetch(`https://stark-chamber-79715.herokuapp.com/allOrders/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })

    }



    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Manage Orders</h1>
                All Orders : {allOrders?.length}
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
                                            (order?.totalPrice && !order?.paid) && <>
                                                <span className='text-error mr-4'>Unpaid</span>
                                                <button
                                                    onClick={() => handleDelete(order?._id)}
                                                    className='btn btn-xs btn-error'>Remove</button>
                                            </>
                                        }
                                        {
                                            (order?.totalPrice && order.paid) && <>
                                                {
                                                    (order?.shipped) ? <span className='text-white bg-primary mr-4 p-2'>Shipped</span> : <>
                                                        <span className='text-success mr-4'>pending</span>
                                                        <button
                                                            onClick={() => handleShiping(order?._id)}
                                                            className='btn btn-xs btn-success'>Ship Now</button>
                                                    </>
                                                }

                                            </>
                                        }
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

export default ManageOrders;
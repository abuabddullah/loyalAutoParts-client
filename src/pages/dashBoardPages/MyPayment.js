// import React, { useState } from 'react';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Loading from '../shared/Loading/Loading';

// const MyPayment = () => {
//     const { _id } = useParams();
//     const [intervalMs, setIntervalMs] = useState(1000);
//     const { isLoading, error, data: order, refetch } = useQuery(['orders', _id], () =>
//         fetch(`https://stark-chamber-79715.herokuapp.com/orders/${_id}`, {
//             method: 'GET',
//             headers: {
//                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
//                 'Content-Type': 'application/json'
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
//     return (
//         <>
//             <div className="flex flex-col text-center w-full my-8">
//                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">MyPayment</h1>
//                 ID : {_id}
//             </div>
//             <div className="hero">
//                 <div className="hero-content text-center  bg-green-100 w-full">
//                     <div className="w-[75%]">
//                         <h1 className="text-3xl font-bold">Your Payment</h1>
//                         <p className="py-6">Your ordered for <strong>{order?.partName}</strong> of <strong>{order?.orderQty} pcs</strong> for <strong>${order?.totalPrice}</strong></p>

//                         <div className="card bg-base-100 shadow-xl">
//                             <div className="card-body">



//                                 {/* <Elements stripe={stripePromise}>
//                                     <CheckoutForm order={order} />
//                                 </Elements> */}



//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MyPayment;





import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';




const stripePromise = loadStripe('pk_test_51L0mz8C4IDVrgcznLbqLXXayVFuiBQhNv7ouT1ZJjcOqjQTXzqDrYklOGJ956Ure0V1KHUekdi7Hz4TweBSmQdNb00LFLHFL41');



const MyPayment = () => {
    const { _id } = useParams();
    const [intervalMs, setIntervalMs] = useState(1000);
    const { isLoading, error, data: order, refetch } = useQuery(['orders', _id], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/orders/${_id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-Type': 'application/json'
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
    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">MyPayment</h1>
                ID : {_id}
            </div>
            <div className="hero">
                <div className="hero-content text-center  bg-green-100 w-full">
                    <div className="w-[75%]">
                        <h1 className="text-3xl font-bold">Your Payment</h1>
                        <p className="py-6">Your ordered for <strong>{order?.partName}</strong> of <strong>{order?.orderQty} pcs</strong> for <strong>${order?.totalPrice}</strong></p>

                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">



                                <Elements stripe={stripePromise}>
                                    <CheckoutForm order={order} />
                                </Elements>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPayment;
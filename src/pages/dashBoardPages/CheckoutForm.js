
import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [tnxId, setTnxId] = useState('');
    const [processing, setProcessing] = useState(false);
    // PAYMENT INTENT
    const { _id, name, email, orderQty, totalPrice, partName } = order || {};
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://stark-chamber-79715.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        



        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);

        
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                        // orderQty : orderQty,
                    },
                },
            },
        );



        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError('');
            setSuccess('Congrats! Your payment is completed.')
            console.log(paymentIntent);
            setTnxId(paymentIntent.id);
            
            //store payment on database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://stark-chamber-79715.herokuapp.com/payment/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />

            {
                cardError && <p className="text-red-500 text-sm mt-8">{cardError}</p>
            }
            {
                success && <div className='mt-8'>
                    <p className="text-green-500 text-sm">{success}</p>
                    <p className="text-blue-500 text-sm"><strong className='text-black'>Transaction ID :</strong> {tnxId}</p>
                </div>
            }

            <button className='btn btn-sm btn-success mt-8' type="submit" disabled={!stripe || !clientSecret || success}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
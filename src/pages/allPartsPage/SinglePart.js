import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../customHooks/useAdmin';
import Loading from '../shared/Loading/Loading';

const SinglePart = ({ part }) => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user);
    const { _id, name, image, description, minQty, availableQty, price } = part || {};

    if (loading || adminLoading) {
        return <Loading />
    }

    
    return (
        <div className="card lg:card-side bg-base-100 border-2 hover:shadow-xl hover:border-2 hover:border-primary transition-all">
            <figure><img src={image} className='w-full h-full object-cover' alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <br />
                <p>{description.slice(0, 100)} . . .</p>
                <p>Available Quantity : {availableQty}</p>
                <p>Unit Price : ${price}</p>
                <p>Min Order Quantity : {minQty}</p>
                <div className="card-actions justify-end">
                    {
                        admin ? (
                            <button
                                onClick={() => navigate(`/dashBoard/upadatePart/${_id}`)}
                                className="btn btn-primary text-white">Update !</button>) : (
                            <button
                                onClick={() => navigate(`/purchase/${_id}`)}
                                className="btn btn-primary text-white">Purchase !</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SinglePart;
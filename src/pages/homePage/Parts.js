import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import useAllParts from '../customHooks/useAllParts';
import Loading from '../shared/Loading/Loading';

const Parts = () => {
    const navigate = useNavigate()

    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allParts, refetch } = useAllParts(intervalMs)
    

    if (isLoading) {
        return <Loading />
    }


    return (
        <section className='bg-secondary py-12'>
            <div className="container py-8 md:p-12 mx-auto bg-white">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary text-center">Parts : 3</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="card glass md:scale-50 hover:md:scale-100 md:translate-x-28 hover:md:translate-x-0 transition-all mb-8 md:mb-0 rounded-lg">
                        <figure><img src={allParts[0]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{allParts[0]?.name}</h2>
                            <p>{allParts[0]?.description.slice(0, 120)} . . .</p>
                            <h2 className='text-2xl font-bold'>Available : {allParts[0]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${allParts[0]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {allParts[0]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${allParts[0]?._id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                    <div className="card glass md:scale-50 hover:md:scale-100 transition-all mb-8 md:mb-0 rounded-lg z-10">
                        <figure><img src={allParts[1]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{allParts[1]?.name}</h2>
                            <p>{allParts[1]?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {allParts[1]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${allParts[1]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {allParts[1]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${allParts[1]?._id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                    <div className="card glass md:scale-50 hover:md:scale-100 md:translate-x-[-112px] hover:md:translate-x-0  transition-all mb-8 md:mb-0 rounded-lg">
                        <figure><img src={allParts[2]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{allParts[2]?.name}</h2>
                            <p>{allParts[2]?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {allParts[2]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${allParts[2]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {allParts[2]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${allParts[2]?._id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-12'>
                    <button 
                    onClick={()=>navigate('/allParts')}
                    className="btn btn-wide btn-primary text-white">See All Parts →</button>
                </div>
            </div>
        </section>
    );
};

export default Parts;
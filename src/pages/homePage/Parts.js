import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const Parts = () => {
    const navigate = useNavigate()

    // GET all availble non booked services by useQuery
    const { isLoading, error, data: parts, refetch } = useQuery(['parts'], () =>
        fetch(`https://stark-chamber-79715.herokuapp.com/parts`)
            .then(res =>
                res.json()
            )
    )

    if (isLoading) {
        return <Loading />
    }


    return (
        <section className='bg-secondary py-12'>
            <div className="container py-8 md:p-12 mx-auto bg-white">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary text-center">Parts : {parts?.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="card glass md:scale-50 hover:md:scale-100 md:translate-x-28 hover:md:translate-x-0 transition-all mb-8 md:mb-0 rounded-lg">
                        <figure><img src={parts[0]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{parts[0]?.name}</h2>
                            <p>{parts[0]?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {parts[0]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${parts[0]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {parts[0]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${parts[0]?.id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                    <div className="card glass md:scale-50 hover:md:scale-100 transition-all mb-8 md:mb-0 rounded-lg z-10">
                        <figure><img src={parts[1]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{parts[1]?.name}</h2>
                            <p>{parts[1]?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {parts[1]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${parts[1]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {parts[1]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${parts[1]?.id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                    <div className="card glass md:scale-50 hover:md:scale-100 md:translate-x-[-112px] hover:md:translate-x-0  transition-all mb-8 md:mb-0 rounded-lg">
                        <figure><img src={parts[2]?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{parts[2]?.name}</h2>
                            <p>{parts[2]?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {parts[2]?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${parts[2]?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {parts[2]?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    onClick={() => navigate(`/purchase/${parts[2]?.id}`)}
                                    className="btn btn-primary text-white">Purchase !</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-12'>
                    <button class="btn btn-wide btn-primary text-white">See All Parts →</button>
                </div>
            </div>
        </section>
    );
};

export default Parts;
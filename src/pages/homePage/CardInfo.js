import React from 'react';

const CardInfo = ({ parts }) => {

    return (
        <>
            {
                parts?.map((part, index) => {
                    <>
                        <figure><img src={part?.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{part?.name}</h2>
                            <p>{part?.description.slice(0, 120)}</p>
                            <h2 className='text-2xl font-bold'>Available : {part?.availableQty}</h2>
                            <h2 className='text-2xl font-bold'>Price : ${part?.price}</h2>
                            <h2 className='text-2xl font-bold'>Min Order Qty : {part?.minQty}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white">Learn now!</button>
                            </div>
                        </div>
                    </>
                })
            }
        </>
    );
};

export default CardInfo;
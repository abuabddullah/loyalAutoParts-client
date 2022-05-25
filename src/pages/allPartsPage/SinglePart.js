import React from 'react';

const SinglePart = ({ part }) => {

    const { name, image, description, minQty, availableQty, price } = part || {};
    return (
        <div class="card md:card-side bg-base-100 shadow-xl">
            <figure><img src={image} className='w-full h-full object-cover' alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <br />
                <p>{description.slice(0, 100)} . . .</p>
                <p>Available Quantity : {availableQty}</p>
                <p>Unit Price : ${price}</p>
                <p>Min Order Quantity : {minQty}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;
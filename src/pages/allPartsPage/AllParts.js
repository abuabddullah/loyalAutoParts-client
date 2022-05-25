import React, { useEffect, useState } from 'react';
import useAllParts from '../customHooks/useAllParts';
import Loading from '../shared/Loading/Loading';
import SinglePart from './SinglePart';

const AllParts = () => {
    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allParts, refetch } = useAllParts(intervalMs)


    if (isLoading) {
        return <Loading />
    }


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary">All Parts : {allParts.length}</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        allParts?.map(part => 
                            <SinglePart
                            key={part._id}
                            part={part}
                            />
                        )
                    }

                </div>

            </div>
        </section>
    );
};

export default AllParts;
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../customHooks/useAdmin';
import useAllParts from '../customHooks/useAllParts';
import Loading from '../shared/Loading/Loading';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const ManageProducts = () => {

    const [activeModal, setActiveModal] = useState(false);
    const [id, setId] = useState('');

    const navigate = useNavigate()

    const [user, userError, loading] = useAuthState(auth)
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user);
    // GET all availble non booked services by useQuery
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: allParts, refetch } = useAllParts(intervalMs)


    if (isLoading) {
        return <Loading />
    }

    if (error || !allParts) {
        <Loading />
        refetch()
    }
    refetch()
    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Manage Products</h1>
                All Products : {allParts?.length}
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full text-center">
                    <thead className='sticky top-0 z-30'>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available Qty</th>
                            <th>Min Order Qty</th>
                            <th>Price</th>
                            <th
                                colSpan={2}
                            >Action</th>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allParts?.map((part, index) =>
                                <tr 
                                key={index}
                                className='hover border-b-2'>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-8 rounded">
                                                <img src={part?.image || "https://bit.ly/3sYYL8x"} alt={part?.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{part?.name}</td>
                                    <td>{part?.availableQty}</td>
                                    <td>{part?.minQty}</td>
                                    <td>{part?.price}</td>
                                    <td>
                                        <button
                                            onClick={() => navigate(`/dashBoard/upadatePart/${part?._id}`)}
                                            className='btn btn-xs btn-success'>Update</button>
                                    </td>
                                    <td>

                                        <label 
                                        onClick={() => {setActiveModal(true)
                                        setId(part?._id)}}
                                        htmlFor="confirmDeleteModal" className="btn modal-button btn-xs btn-error">Remove</label>
                                    </td>
                                    <td>{part?._id}</td>
                                    <td className=''>{part?.description}</td>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Available Qty</th>
                            <th>Min Order Qty</th>
                            <th>Price</th>
                            <th
                                colSpan={2}
                            >Action</th>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </tfoot>
                </table>
                {
                    activeModal &&
                    <ConfirmDeleteModal
                        _id={id}
                        setActiveModal={setActiveModal}
                        setId={setId}
                    />
                }
            </div>
        </>
    );
};

export default ManageProducts;
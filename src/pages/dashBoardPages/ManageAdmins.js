import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../customHooks/useAdmin';
import useAllMembers from '../customHooks/useAllMembers';
import Loading from '../shared/Loading/Loading';

const ManageAdmins = () => {
    const [user, userError, loading] = useAuthState(auth)
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user);
    const [intervalMs, setIntervalMs] = useState(1000);
    const { isLoading, error, data: allMembers, refetch } = useAllMembers(intervalMs);


    if (isLoading || adminLoading) {
        return <Loading />
    }

    if (error || userError) {
        refetch();
        <Loading />
    }


    const handleAdmin = (email) => {
        console.log(email);
        fetch(`https://stark-chamber-79715.herokuapp.com/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setAdmin(data.admin);
                // setAdminLoading(false);
                refetch();
            })
            .catch(err => {
                console.log(err);
                // setAdmin(false);
                // setAdminLoading(false);
                refetch();
            })

    }


    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">Manage Admins</h1>
                All members : {allMembers?.length}
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table table-compact w-full text-center">
                    <thead className='sticky top-0 z-30'>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th
                                colSpan={2}
                            >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allMembers?.map((member, index) =>
                                <tr 
                                key={index}
                                className='hover border-b-2'>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-8 rounded">
                                                <img src={member?.photoURL || "https://bit.ly/3sYYL8x"} alt={member?.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{member?.name}</td>
                                    <td>{member?.email}</td>
                                    <td>{member?.role}</td>
                                    <td>
                                        {
                                            member?.role || <button
                                                onClick={() => handleAdmin(member?.email)}
                                                className='btn btn-xs btn-success'>Make Admin</button>
                                        }

                                    </td>
                                    <td>
                                        <button title='not in requirement' disabled className='btn btn-xs btn-error'>Remove</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th
                                colSpan="2"
                            >Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default ManageAdmins;
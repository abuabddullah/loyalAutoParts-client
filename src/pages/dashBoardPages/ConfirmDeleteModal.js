import React from 'react';

const ConfirmDeleteModal = ({ _id, setActiveModal, setId }) => {
    const handleDelete = () => {
        console.log(_id);
        fetch(`https://stark-chamber-79715.herokuapp.com/deleteProducts/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setActiveModal(false);
                setId('');
            })
            .catch(err => {
                console.log(err);
                setActiveModal(false);
                setId('');
            })

    }
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="confirmDeleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative top-8 lg:top-9 lg:left-40">
                    <label htmlFor="confirmDeleteModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg md:text-4xl mb-6 font-bold">Sure to Delete ?</h3>
                    <div>
                        <img src="https://cdn.dribbble.com/users/422171/screenshots/5348345/close-and-reply.gif" alt="" className='w-full' />
                        <button
                            onClick={handleDelete}
                            className="btn btn-error btn-wide mt-6 text-white text-2xl">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { AiFillStar } from "react-icons/ai";
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';
// import useReview from '../customHooks/useReview';
// const MyReview = () => {
//     const [user, loading, error4User] = useAuthState(auth);
//     const [intervalMs, setIntervalMs] = useState(1000)
//     const { isLoading, error, data: singleReview, refetch } = useReview(user, intervalMs)

//     const [rate, setRate] = useState(0);
//     const [isRated, setIsRated] = useState(false);
//     const [reviewed, setReviewed] = useState(false);
//     // console.log('rate', rate);
//     const stars = [5, 4, 3, 2, 1]


// useEffect(() => {
//     if (singleReview) {
//         // console.log('singleReview', singleReview);
//         setReviewed(true);
//     }
// }, [singleReview])


//     const handleReview = () => {
//         const review = {
//             email: user.email,
//             name: user.displayName,
//             rate: rate,
//         }
//         // console.log('review', review);
//         const url = `https://stark-chamber-79715.herokuapp.com/reviews`;
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify(review)
//         })
//             .then(res => res.json())
//             .then(res => {
//                 if (res.success) {
//                     setReviewed(true);
//                     console.log('review success');
//                 }
//             })

//     }

//     const handleUpdateReview = () => {
//         const email = user.email;
//         const updateReview = {
//             rate: rate,
//         }
//         console.log(updateReview);
//         const url = `https://stark-chamber-79715.herokuapp.com/reviews/${email}`;
//         fetch(url, {
//             method: 'PUT',
//             body: JSON.stringify(updateReview),
//             headers: {
//                 'Content-Type': 'application/json',
//                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log("data", data);
//                 toast.success("Review updated successfully");
//                 // navigate(from);
//             })
//             .catch(err => {
//                 console.log("err", err);
//                 toast.error("Error updating profile");
//             })
//     }


//     return (
//         <>
//             <div className="flex flex-col text-center w-full my-8">
//                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">My Review</h1>
//                 <p className="text-secondary"> On the Service Quality of <strong>Loyal Auto Parts</strong></p>
//             </div>

//             <div className=''>
//                 <ul>
//                     {
//                         stars.map((star, index) =>
//                             <li className='grid grid-cols-3 gap-2 my-2'>
//                                 <input onClick={() => {
//                                     setRate(star)
//                                     setIsRated(true)
//                                 }}
//                                     // checked={star===rate} 
//                                     type="radio" name="radio-4" className="radio radio-primary" />
//                                 <strong className=''>{star}</strong>
//                                 <strong className='text-primary  flex items-center'><AiFillStar /></strong>
//                             </li>
//                         )
//                     }

//                 </ul>
//                 {
//                     reviewed ? (
//                         <button
//                             onClick={handleUpdateReview}
//                             disabled={!isRated || !reviewed} className="btn text-white btn-primary my-8">Update review</button>
//                     ) : (
//                         <button
//                             onClick={handleReview}
//                             disabled={!isRated || reviewed} className="btn text-white btn-primary my-8">Rate Now</button>
//                     )
//                 }



//             </div>
//         </>
//     );
// };

// export default MyReview;














import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from "react-icons/ai";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useReview from '../customHooks/useReview';
const MyReview = () => {
    const [user, loading, error4User] = useAuthState(auth);
    const [intervalMs, setIntervalMs] = useState(1000)
    const { isLoading, error, data: singleReview, refetch } = useReview(user, intervalMs)

    const [rate, setRate] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [reviewed, setReviewed] = useState(false);
    // console.log('rate', rate);
    const stars = [5, 4, 3, 2, 1]


    useEffect(() => {
        if (singleReview) {
            // console.log('singleReview', singleReview);
            setReviewed(true);
        }
    }, [singleReview])


    // const handleReview = () => {
    //     const review = {
    //         email: user.email,
    //         name: user.displayName,
    //         rate: rate,
    //     }
    //     // console.log('review', review);
    //     const url = `https://stark-chamber-79715.herokuapp.com/reviews`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.success) {
    //                 setReviewed(true);
    //                 console.log('review success');
    //             }
    //         })

    // }

    const handleUpdateReview = () => {
        const email = user.email;
        const updateReview = {
            email: user.email,
            name: user.displayName,
            rate: rate,
            photoURL: user.photoURL,
        }
        console.log(updateReview);
        const url = `https://stark-chamber-79715.herokuapp.com/reviews/${email}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(updateReview),
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                toast.success("Review updated successfully");
                // navigate(from);
            })
            .catch(err => {
                console.log("err", err);
                toast.error("Error updating profile");
            })
    }


    return (
        <>
            <div className="flex flex-col text-center w-full my-8">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary">My Review</h1>
                <p className="text-secondary"> On the Service Quality of <strong>Loyal Auto Parts</strong></p>
            </div>

            <div className=''>
                <ul>
                    {
                        stars.map((star, index) =>
                            <li className='flex my-2'>
                                <input onClick={() => {
                                    setRate(star)
                                    setIsRated(true)
                                }}
                                    // checked={star===rate} 
                                    type="radio" name="radio-4" className="radio radio-primary" />
                                {/* <strong className=''>{star}</strong> */}
                                <strong className='text-primary  flex items-center mx-4'>
                                    {
                                        [...Array(star).keys()].map((pNum, index) => <svg className="w-5 h-5 text-primary fill-current dark:text-gray-300" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                        </svg>)
                                    }
                                    {/* <AiFillStar /> */}
                                    </strong>
                            </li>
                        )
                    }

                </ul>
                {/* {
                    reviewed ? (
                        <button
                            onClick={handleUpdateReview}
                            disabled={!isRated || !reviewed} className="btn text-white btn-primary my-8">Review Now</button>
                    ) : (
                        <button
                            onClick={handleReview}
                            disabled={!isRated || reviewed} className="btn text-white btn-primary my-8">Rate Now</button>
                    )
                } */}




                <button
                    onClick={handleUpdateReview}
                    disabled={!isRated} className="btn text-white btn-primary my-8">Review Now</button>



            </div>
        </>
    );
};

export default MyReview;
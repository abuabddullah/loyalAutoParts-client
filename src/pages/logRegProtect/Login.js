import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import GoogleSignIn from './GoogleSignIn';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import createAccessToken from '../utillity/createAccessToken';

const Login = () => {

    const [isRegistered, setIsRegistered] = useState(true);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isDecrypted, setIsDecrypted] = useState(false);
    const [isError, setIsError] = useState('');


    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // get element for login with email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // get element for register with email and password
    const [displayName, setDisplayName] = useState('');
    const [
        createUserWithEmailAndPassword,
        regUser,
        regLoading,
        regError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const { email, name, password } = data || {}
        if (isRegistered) {
            signInWithEmailAndPassword(email, password)
        } else {
            await createUserWithEmailAndPassword(email, password)
            setDisplayName(name);
            await updateProfile({ displayName: name });
        }
        reset();
    }

    // get email on blur for reset pass
    const [email, setEmail] = useState('');
    const handleEmailOnBlur = (e) => {
        setEmail(e.target.value);
    }



    // reset password
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleResetPass = async () => {
        if (email) {
            console.log(email);
            await sendPasswordResetEmail(email);
            toast.success('Email sent successfully');
        }
    }



    // control error
    useEffect(() => {
        if (error || regError || resetError) {
            let message = error?.message || regError?.message || resetError?.message;
            setIsError(message);
            setIsAgreed(false);
            toast.error(message, { id: 'error' });
        }
    }, [error, regError, resetError]);

    // control user
    useEffect(() => {
        if (user || regUser) {
            const { email } = regUser?.user || user?.user || {};
            console.log('email', email);
            createAccessToken(email);
            navigate(from, { replace: true });
        }
    }, [user, regUser, setIsError, from, navigate]);


    if (loading || regLoading) {
        return <Loading />
    }



    return (
        <div className="">
            <div className="p-8 lg:w-1/2 mx-auto">

                <GoogleSignIn
                    setIsError={setIsError}
                />

                <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                    <p className="text-center text-sm text-gray-500 font-light"> Or sign in with credentials </p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-6">

                        {/* to generate a register form if not registered */}
                        {
                            isRegistered || (
                                <div className="relative">
                                    <input
                                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Name"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name required'
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: 'Name length maximum 20 characters'
                                            }
                                        })}
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /> </svg>
                                    </div>
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        {errors.name?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                            )
                        }
                        <div className="relative mt-3">
                            <input
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Invalid email'
                                    }
                                })}
                                onBlur={handleEmailOnBlur}
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /> </svg>
                            </div>
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="relative mt-3">
                            <input
                                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                id="password"
                                type={isDecrypted ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password length minimum 6 digit'
                                    }
                                })}
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" /> </svg>
                            </div>
                            <div className="absolute right-4 inset-y-0 flex items-center text-gray-400 text-xl">
                                {
                                    isDecrypted ? <BsFillEyeSlashFill
                                        className='cursor-pointer'
                                        onClick={() => setIsDecrypted(!isDecrypted)}
                                    /> : <BsFillEyeFill
                                        className='cursor-pointer'
                                        onClick={() => setIsDecrypted(!isDecrypted)}
                                    />
                                }
                            </div>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt  text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        {/* to Force for agree policy */}
                        <div className="mt-4 flex items-center text-gray-500">
                            <input
                                onClick={() => setIsAgreed(!isAgreed)}
                                type="checkbox" id="remember" name="remember" className="mr-3" />
                            <label htmlFor="remember" className={isAgreed ? "text-secondary" : ""}>
                                {
                                    isRegistered ? "Remember me" : "I agree All Policy"
                                }
                            </label>
                        </div>


                        {/* to reset pass */}
                        {
                            isRegistered &&
                            <p
                                onClick={handleResetPass}
                                className="mt-4 text-secondary cursor-pointer">
                                Forgot password?
                            </p>
                        }


                        {/* to toggle register and login button */}
                        {
                            isRegistered ? (
                                <div className="flex items-center justify-center my-8">
                                    <button
                                        type='submit'
                                        className="text-white py-2 px-4 uppercase rounded bg-primary hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> Sign in </button>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center my-8">
                                    <button
                                        disabled={!isAgreed}
                                        type='submit'
                                        className="text-white py-2 px-4 uppercase rounded bg-primary hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"> Sign Up </button>
                                </div>
                            )
                        }


                    </form>


                    {
                        isError ? <p className="pb-4 text-red-600 text-center"><code>{isError}</code></p> : ""
                    }


                    {/* to toggle register and login form */}
                    {
                        isRegistered ? (
                            <p className="text-center">
                                Not sign up yet ? <span
                                    onClick={() => {
                                        setIsRegistered(!isRegistered)
                                        setIsDecrypted(false)
                                        reset()
                                    }}
                                    className="text-secondary cursor-pointer">Sign Up now</span>
                            </p>
                        ) : (
                            <p className="text-center">
                                Already signned up ? <span
                                    onClick={() => {
                                        setIsRegistered(!isRegistered)
                                        setIsDecrypted(false)
                                        reset()
                                    }}
                                    className="text-secondary cursor-pointer">Sign in now</span>
                            </p>
                        )
                    }

                </div>


            </div>
            <div className='credential p-4 text-white w-1/3 rounded-lg fixed top-24 right-8'>
                <h2 className="text-xl font-bold">
                    Admin credentials
                </h2>
                <p>email : admin@admin.com <br />
                    pass : adminadmin</p>
            </div>
        </div>
    );
};

export default Login;
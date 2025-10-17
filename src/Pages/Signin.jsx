import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';

const Signin = () => {
    const [user, setUser] = useState({});


    const [show, setShow] = useState(false);
    const handleSignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user);
                toast.success('Sign In Success');
                setUser(response.user);
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    console.log(user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success('Sign Out Done')
            setUser(null)
        }).catch((error) => {
            toast.error(error.message)
        })
    }

    return (
        <div className="hero text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-nowrap font-bold">{user ? 'User info' : 'Sign In Now!'}</h1>
                    <p className="py-6">

                    </p>
                </div>
                {
                    user ? (<div>
                        <button onClick={handleSignOut}>Sign Out </button>
                    </div>) : (<div className="card text-black w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <div className='relative'>
                                        <label className="label relative">Password</label>
                                        <input type={show ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    </div>
                                    <div>
                                        <a className="link text-white link-hover">Forgot password?</a>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Sign IN</button>
                                    <button className="btn btn-neutral"><Link to={'/signup'}>New! Create An Account Now</Link></button>
                                    <span onClick={() => setShow(!show)} className='absolute z-50 right-15 top-[130px]'>
                                        {
                                            show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>
                                        }
                                    </span>
                                </fieldset>
                            </form>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Signin;
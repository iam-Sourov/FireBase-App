import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!Regex.test(password)) {
            toast.error("Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(Response => {
                console.log(Response.user);
                toast.success('success')
            })
            .catch(error => {
                console.log(error);
                toast(error.message)
            })


    }
    return (
        <div className="hero text-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-nowrap font-bold">Sign Up Now!</h1>
                    <p className="py-6">

                    </p>
                </div>
                <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body ">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset text-black ">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <div className='relative'>
                                    <label className="label relative">Password</label>
                                    <input type={show ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                </div>
                                <div>
                                    <a className="link text-white link-hover">Forgot password?</a>
                                </div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                                <button className="btn btn-neutral"><Link to={'/signin'}>Already Have An Account</Link></button>
                                <span onClick={() => setShow(!show)} className='absolute z-50 right-15 top-[130px]'>
                                    {
                                        show ? <FaEye></FaEye> : <IoEyeOff></IoEyeOff>
                                    }

                                </span>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
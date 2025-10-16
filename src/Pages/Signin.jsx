import React from 'react';
import { Link } from 'react-router';

const Signin = () => {
    return (
        <div className="hero text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-nowrap font-bold">Sign In Now!</h1>
                    <p className="py-6">

                    </p>
                </div>
                <div className="card text-white w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Sign IN</button>
                            <button className="btn btn-neutral"><Link to={'/signup'}>New! Create An Account Now</Link></button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
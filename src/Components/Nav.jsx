import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    const links = <>
        <li><NavLink className={'btn btn-ghost '} to={'/'}>Home</NavLink></li>
        <li><NavLink className={'btn btn-ghost '} to={'/profile'}>Profile</NavLink></li>
        <li><NavLink className={'btn btn-ghost '} to={'/about'}>About</NavLink></li>
    </>
    return (

        <div className="navbar bg-black text-white shadow-sm">
            <div className="navbar-start">

                <a className="text-lg"><img className='w-25' src={'https://www.gstatic.com/devrel-devsite/prod/v5460c633fd1ad4a595c7768c5f9ad1c686621a7060717ae56fbd5e2f0e851090/firebase/images/lockup.svg'} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button><NavLink className={'btn btn-ghost bg-purple-500 '} to={'/signin'}>Sign IN</NavLink></button>
            </div>
            <div className="dropdown pl-2">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;
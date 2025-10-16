import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    const links = <>
        <NavLink className={'btn btn-ghost '} to={'/'}>Home</NavLink>
        <NavLink className={'btn btn-ghost '} to={'/profile'}>Profile</NavLink>
        <NavLink className={'btn btn-ghost '} to={'/about'}>About</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="text-lg">FireBase AUTH</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
        </div>
    );
};

export default Nav;
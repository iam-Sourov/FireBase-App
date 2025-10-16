import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;
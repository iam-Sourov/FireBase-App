import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='h-[100vh] bg-gradient-to-r from-[#004ff9] to-[#000000]'>
            <Nav></Nav>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default RootLayout;
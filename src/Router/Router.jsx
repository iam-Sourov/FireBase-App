import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import About from '../Pages/About';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: 'profile',
                element: <Profile></Profile>,
            },
            {
                path: 'about',
                element: <About></About>,
            },
            {
                path: 'signin',
                element: <Signin></Signin>,
            },
            {
                path: 'signup',
                element: <Signup></Signup>,
            },

        ]
    },
]);
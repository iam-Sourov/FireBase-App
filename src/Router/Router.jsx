import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import About from '../Pages/About';

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

        ]
    },
]);
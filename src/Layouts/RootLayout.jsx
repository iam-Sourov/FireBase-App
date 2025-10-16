
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';


const RootLayout = () => {
    return (
        <div className='min-h-screen'>
            
            <Nav></Nav>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default RootLayout;
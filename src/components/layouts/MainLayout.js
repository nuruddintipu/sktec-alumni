import NavigationBar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;

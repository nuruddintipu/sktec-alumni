import MainLayout from '../components/layouts/MainLayout';
import MinimalLayout from '../components/layouts/MinimalLayout';

import Homepage from '../components/pages/homepage/Homepage';
import About from '../components/pages/about/About';
import AlumniDirectory from '../components/pages/alumni-directory/AlumniDirectory';
import Contact from '../components/pages/contact/Contact';
import Login from '../components/pages/login/Login';
import SecuredPage from '../components/pages/login/SecuredPage';
import RegistrationPage from '../components/pages/registration/components/RegistrationPage';
import { Navigate } from 'react-router-dom';
import FoundingStory from '../components/pages/founding-story/FoundingStory';
import Constitution from '../components/pages/constitution/Constitution';


const ProtectedRoutes = ({ routeElement }) => {
    const isAuthenticated = true;
    return isAuthenticated ? routeElement : <Navigate to="/auth/login" />;
};

const mainLayoutRoutes = [
    { path: '', element: <Homepage />, name: 'HOME' },
    { path: 'about', element: <About />, name: 'ABOUT' },
    {
        path: 'alumni-directory',
        element: <ProtectedRoutes routeElement={<AlumniDirectory />} />,
        name: 'ALUMNI_DIRECTORY'
    },
    { path: 'contact', element: <Contact />, name: 'CONTACT' },
    { path: 'founding-story', element: <FoundingStory />, name: 'FOUNDING_STORY' },
    { path: 'constitution', element: <Constitution />, name: 'CONSTITUTION' }
];

const minimalLayoutRoutes = [
    { path: 'login', element: <Login />, name: 'LOGIN' },
    { path: 'registration', element: <RegistrationPage />, name: 'REGISTRATION' },
    { path: 'secured', element: <ProtectedRoutes routeElement={<SecuredPage />} />, name: 'SECURED_PAGE' }
];

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: mainLayoutRoutes
    },
    {
        path: 'auth',
        element: <MinimalLayout />,
        children: minimalLayoutRoutes
    }
];

export default routes;

import MainLayout from '../components/layouts/MainLayout';
import MinimalLayout from '../components/layouts/MinimalLayout';

import Homepage from '../components/pages/homepage/Homepage';
import About from '../components/pages/about/About';
import AlumniDirectory from '../components/pages/alumni-directory/AlumniDirectory';
import Contact from '../components/pages/contact/Contact';
import Login from '../components/pages/login/Login';
import SecuredPage from '../components/pages/login/SecuredPage';
import RegistrationPage from "../components/pages/registration/components/RegistrationPage";
import {redirect} from "react-router-dom";

function authLoader() {
    const isAuthenticated = localStorage.getItem('user'); // Example logic
    if (!isAuthenticated) {
        return redirect('/auth/login');
    }
    return null;
}

const mainLayoutRoutes = [
    {path: '', element: <Homepage/>, loader: authLoader, name: 'HOME'},
    {path: 'about', element: <About/>, loader: authLoader, name: 'ABOUT'},
    {
        path: 'alumni-directory',
        element: <AlumniDirectory/>,
        loader: authLoader,
        name: 'ALUMNI_DIRECTORY'
    },
    {path: 'contact', element: <Contact/>, loader: authLoader, name: 'CONTACT'}
];

const minimalLayoutRoutes = [
    {path: 'login', element: <Login/>, loader: authLoader, name: 'LOGIN'},
    {path: 'registration', element: <RegistrationPage/>, loader: authLoader, name: 'REGISTRATION'},
    {path: 'secured', element: <SecuredPage/>, loader: authLoader, name: 'SECURED_PAGE'}
];

const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        loader: authLoader,
        children: mainLayoutRoutes
    },
    {
        path: 'auth',
        element: <MinimalLayout/>,
        loader: authLoader,
        children: minimalLayoutRoutes
    }
];

export default routes;

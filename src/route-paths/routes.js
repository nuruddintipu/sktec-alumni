import MainLayout from '../components/layouts/MainLayout';
import MinimalLayout from '../components/layouts/MinimalLayout';

import Homepage from '../components/pages/homepage/Homepage';
import About from '../components/pages/about/About';
import AlumniDirectory from '../components/pages/alumni-directory/AlumniDirectory';
import Contact from '../components/pages/contact/Contact';
import Login from '../components/pages/login/Login';
import SecuredPage from '../components/pages/login/SecuredPage';

function authLoader() {
    alert('authLoader');
}

const mainLayoutRoutes = [
    { path: '', element: <Homepage />, loader: authLoader },
    { path: 'about', element: <About />, loader: authLoader },
    {
        path: 'alumni-directory',
        element: <AlumniDirectory />,
        loader: authLoader
    },
    { path: 'contact', element: <Contact />, loader: authLoader }
];

const minimalLayoutRoutes = [
    { path: 'login', element: <Login />, loader: authLoader },
    { path: 'secured', element: <SecuredPage />, loader: authLoader }
];

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        loader: authLoader,
        children: mainLayoutRoutes
    },
    {
        path: 'auth',
        element: <MinimalLayout />,
        loader: authLoader,
        children: minimalLayoutRoutes
    }
];

export default routes;

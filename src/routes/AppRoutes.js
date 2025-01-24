import { Routes, Route } from 'react-router-dom';
import routes from './routes';

const generateRoutes = (routes) =>
    routes.map(({ path, element, children }, index) => (
        <Route key={index} path={path} element={element}>
            {children && generateRoutes(children)}
        </Route>
    ));

const AppRoutes = () => <Routes>{generateRoutes(routes)}</Routes>;

export default AppRoutes;

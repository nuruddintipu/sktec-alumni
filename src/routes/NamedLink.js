import routes from "./routes";
import {Link} from "react-router-dom";

const normalizePath = (parentPath, routePath) => {
    const combinedPath = `${parentPath}${routePath ? `/${routePath}` : ''}`;
    return combinedPath.replace(/\/+/g, '/').replace(/\/$/, '');
};

export const getRoutePath = (routeName, routeList = routes, parentPath = '') => {
    for (const route of routeList) {
        const fullPath = normalizePath(parentPath, route.path);

        if (route.name === routeName) {
            return fullPath;
        }

        if (route.children) {
            const childPath = getRoutePath(routeName, route.children, fullPath);
            if (childPath) {
                return childPath;
            }
        }
    }
    return null;
};

const NamedLink = ({routeName, children, ...props}) => {
    const path = getRoutePath(routeName) || '';
    return <Link to={path} {...props}>{children}</Link>;
};

export default NamedLink;

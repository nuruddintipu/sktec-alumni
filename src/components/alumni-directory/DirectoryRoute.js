import AlumniDirectory from "./AlumniDirectory";
import {DirectoryProvider} from "./DirectoryContext";

const DirectoryRoute = () => {
    return (
        <DirectoryProvider>
            <AlumniDirectory />
        </DirectoryProvider>
    );
};
export default DirectoryRoute;
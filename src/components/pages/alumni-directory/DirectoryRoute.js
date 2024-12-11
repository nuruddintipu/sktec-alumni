import AlumniDirectory from "./AlumniDirectory";
import {DirectoryProvider} from "../../../context/DirectoryContext";

const DirectoryRoute = () => {
    return (
        <DirectoryProvider>
            <AlumniDirectory />
        </DirectoryProvider>
    );
};
export default DirectoryRoute;
import PublicLayout from "../page-share/products/PublicLayout.tsx";
import useCheckAuth from "./useCheckAuth.tsx";
// App config provider
const PublicRoute = () => {
    useCheckAuth();
    return   <PublicLayout/>
};

export default PublicRoute;
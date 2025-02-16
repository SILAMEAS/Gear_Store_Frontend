import AdminLayout from "../admin/AdminLayout.tsx";
import useCheckAuth from "./useCheckAuth.tsx";

export const AdminRoute = () => {
    useCheckAuth();
    return <AdminLayout />
};
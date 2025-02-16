import UserLayout from "../user/UserLayout.tsx";
import useCheckAuth from "./useCheckAuth.tsx";

export const EndUserRoute = () => {
    useCheckAuth();
    return  <UserLayout />
};
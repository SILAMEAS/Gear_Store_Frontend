import {useLazyGetUserDetailQuery, useRefreshTokenMutation} from "../../redux/services/userApi.ts";
import {useEffect} from "react";
import getToken from "../local-storage/token/useGetToken.ts";
import {storeToken} from "../local-storage/token/storeToken.ts";
import {store} from "../../redux/redux.ts";
import {setRole} from "../../redux/store/application.ts";
import useGlobalHook from "./useGlobalHook.tsx";
import {EnumRole} from "../../redux/store/type.ts";

export const useProtectedRoute=()=>{
    const [getRefreshToken, resultRefreshToken] = useRefreshTokenMutation();
    const [userDetail,resultUserDetail]=useLazyGetUserDetailQuery();
    const {location}=useGlobalHook();

    useEffect(() => {
        const refreshToken = getToken()?.refresh;
        if (refreshToken) {
            getRefreshToken({ refresh:refreshToken })
                .unwrap()
                .then((res) => {
                    if (res) {
                        storeToken(res);

                        userDetail({}).unwrap().then(r=>{
                            if(r.is_superuser){
                                store.dispatch(setRole(EnumRole.ADMIN));
                            }else {
                                store.dispatch(setRole(EnumRole.USER));
                            }
                        })
                    }
                });
        }
    }, [location,getRefreshToken]);
    return {resultRefreshToken,resultUserDetail}
}
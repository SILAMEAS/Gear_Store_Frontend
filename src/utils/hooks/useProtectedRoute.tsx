import {useLazyGetUserDetailQuery, useRefreshTokenMutation} from "../../redux/services/userApi.ts";
import {useEffect} from "react";
import getToken from "../local-storage/token/useGetToken.ts";
import {storeToken} from "../local-storage/token/storeToken.ts";
import {store} from "../../redux/redux.ts";
import {setUserDetail} from "../../redux/store/application.ts";

export const useProtectedRoute=()=>{
    const [getRefreshToken, resultRefreshToken] = useRefreshTokenMutation();
    const [userDetail,resultUserDetail]=useLazyGetUserDetailQuery();
    useEffect(() => {
        const refreshToken = getToken()?.refresh;
        if (refreshToken) {
            getRefreshToken({ refresh:refreshToken })
                .unwrap()
                .then((res) => {
                    if (res) {
                        storeToken(res);
                        userDetail({}).unwrap().then(r=>{
                            store.dispatch(setUserDetail(r))
                        })
                    }
                });
        }
    }, [getRefreshToken]);
    return {resultRefreshToken,resultUserDetail}
}
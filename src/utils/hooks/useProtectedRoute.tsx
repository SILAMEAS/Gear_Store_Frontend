import {useLazyGetUserDetailQuery, useRefreshTokenMutation} from "@redux/services/userApi.ts";
import {useEffect} from "react";
import {store} from "@redux/redux.ts";
import {setUserDetail} from "@redux/store/application.ts";
import {Route} from "@/constant/Route.ts";
import {useNavigate} from "react-router-dom";
import getToken from "@utils/local-storage/token/useGetToken.ts";
import {storeToken} from "@utils/local-storage/token/storeToken.ts";

export const useProtectedRoute=()=>{
    const [getRefreshToken, resultRefreshToken] = useRefreshTokenMutation();
    const [userDetail,resultUserDetail]=useLazyGetUserDetailQuery();
    const navigate=useNavigate();
    const clearStorage=()=>{
        localStorage.clear();
        navigate(Route.public.LOGIN);
        window.location.reload();
    }
    const handleRefreshToken=async ()=>{
        try {
            const refreshToken = getToken()?.refresh;
            if (refreshToken) {
                const res= await  getRefreshToken({ refresh:refreshToken })
                    .unwrap();
                if (res) {
                    storeToken(res);
                    userDetail({}).unwrap().then(r=>{
                        store.dispatch(setUserDetail(r))
                    })
                }

            }
        }catch (e){
            console.log(e)
            clearStorage()
        }
    }
    useEffect(() => {
        handleRefreshToken().then(r=>r)
    }, [getRefreshToken]);

    return {resultRefreshToken,resultUserDetail}
}
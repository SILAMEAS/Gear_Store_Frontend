import {Route} from "@/constant/Route.ts";
import {useLoginMutation} from "@redux/services/userApi.ts";
import {enqueueSnackbar} from "notistack";
import useGlobalHook from "@utils/hooks/useGlobalHook.tsx";
import {storeToken} from "@utils/local-storage/token/storeToken.ts";
import {$handleResponseMessage} from "@utils/common/$handleResponseMessage.ts";

export interface ILogin {
    email: string;
    password: string;
}

const useAuth = () => {
    const {navigate}=useGlobalHook();
    const [login,resultLogin] = useLoginMutation();
    const handleLogout=()=>{
        localStorage.clear();
        navigate(Route.public.LOGIN);
        window.location.reload();
    }
    const handleLogin = async (data: ILogin) => {
        return login(data)
            .unwrap()
            .then((res) => {
                if (res) {
                    storeToken(res);
                    window.location.reload();
                }
            })
            .catch((e) => {
                enqueueSnackbar(
                    $handleResponseMessage({e}),
                    {
                        variant: "error",
                    },
                );
            });
    };
    return {handleLogout,handleLogin,resultLogin}
};

export default useAuth;

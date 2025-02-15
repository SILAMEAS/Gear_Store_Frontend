const getToken = () => {
    const tokenString =localStorage.getItem("token");
    if(!tokenString){
        console.error('useGetToken is problem');
        return
    }
    const token:{access:string,refresh:string}=JSON.parse(tokenString);
    console.log('token',token)
    return  {refresh_token:token.refresh,access:token?.access}
};

export default getToken;

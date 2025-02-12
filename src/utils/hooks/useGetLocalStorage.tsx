const useGetLocalStorage = () => {
    return  {refresh_token:localStorage.getItem("refresh_token")}
};

export default useGetLocalStorage;

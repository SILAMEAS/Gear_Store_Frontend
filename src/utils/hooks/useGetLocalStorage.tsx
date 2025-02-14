const useGetLocalStorage = () => {
    return  {refresh_token:localStorage.getItem("refresh_token"),access:localStorage.getItem("access")}
};

export default useGetLocalStorage;
